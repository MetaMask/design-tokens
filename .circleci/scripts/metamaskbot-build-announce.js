#!/usr/bin/env node
const { promises: fs } = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { getHighlights } = require('./highlights');

start().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function start() {
  const { GITHUB_COMMENT_TOKEN, CIRCLE_PULL_REQUEST } = process.env;
  console.log('CIRCLE_PULL_REQUEST', CIRCLE_PULL_REQUEST);
  const { CIRCLE_SHA1 } = process.env;
  console.log('CIRCLE_SHA1', CIRCLE_SHA1);
  const { CIRCLE_BUILD_NUM } = process.env;
  console.log('CIRCLE_BUILD_NUM', CIRCLE_BUILD_NUM);
  const { CIRCLE_WORKFLOW_JOB_ID } = process.env;
  console.log('CIRCLE_WORKFLOW_JOB_ID', CIRCLE_WORKFLOW_JOB_ID);

  if (!CIRCLE_PULL_REQUEST) {
    console.warn(`No pull request detected for commit "${CIRCLE_SHA1}"`);
    return;
  }

  const CIRCLE_PR_NUMBER = CIRCLE_PULL_REQUEST.split('/').pop();
  const SHORT_SHA1 = CIRCLE_SHA1.slice(0, 7);
  const BUILD_LINK_BASE = `https://output.circle-artifacts.com/output/job/${CIRCLE_WORKFLOW_JOB_ID}/artifacts/0`;

  const storybookUrl = `${BUILD_LINK_BASE}/storybook/index.html`;
  const storybookLink = `<a href="${storybookUrl}">Storybook</a>`;

  // link to artifacts
  const allArtifactsUrl = `https://circleci.com/gh/MetaMask/design-tokens/${CIRCLE_BUILD_NUM}#artifacts/containers/0`;

  const contentRows = [
    `storybook: ${storybookLink}`,
    `<a href="${allArtifactsUrl}">all artifacts</a>`,
  ];
  const hiddenContent = `<ul>${contentRows
    .map((row) => `<li>${row}</li>`)
    .join('\n')}</ul>`;
  const exposedContent = `Builds ready [${SHORT_SHA1}]`;
  const artifactsBody = `<details><summary>${exposedContent}</summary>${hiddenContent}</details>\n\n`;

  let commentBody = artifactsBody;
  try {
    const highlights = await getHighlights({ artifactBase: BUILD_LINK_BASE });
    if (highlights) {
      const highlightsBody = `### highlights:\n${highlights}\n`;
      commentBody += highlightsBody;
    }
  } catch (error) {
    console.error(`Error constructing highlight results: '${error}'`);
  }

  const JSON_PAYLOAD = JSON.stringify({ body: commentBody });
  const POST_COMMENT_URI = `https://api.github.com/repos/metamask/design-tokens/issues/${CIRCLE_PR_NUMBER}/comments`;
  console.log(`Announcement:\n${commentBody}`);
  console.log(`Posting to: ${POST_COMMENT_URI}`);

  const response = await fetch(POST_COMMENT_URI, {
    method: 'POST',
    body: JSON_PAYLOAD,
    headers: {
      'User-Agent': 'metamaskbot',
      Authorization: `token ${GITHUB_COMMENT_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Post comment failed with status '${response.statusText}'`);
  }
}
