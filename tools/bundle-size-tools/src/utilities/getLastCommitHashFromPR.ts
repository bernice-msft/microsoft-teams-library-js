import { WebApi } from 'azure-devops-node-api';

/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Fetches the last commit hash for a PR.
 */
export async function getLastCommitHashFromPR(adoConnection: WebApi, prId: number, repoGuid: string): Promise<string> {
  const gitApi = await adoConnection.getGitApi();
  const prCommits = await gitApi.getPullRequestCommits(repoGuid, prId);

  return prCommits[0].commitId;
}
