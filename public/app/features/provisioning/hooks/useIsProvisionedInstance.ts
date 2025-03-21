import { skipToken } from '@reduxjs/toolkit/query';

import { RepositoryViewList, useGetFrontendSettingsQuery } from '../api';
import { checkSyncSettings } from '../utils/checkSyncSettings';

export function useIsProvisionedInstance(settings?: RepositoryViewList) {
  const settingsQuery = useGetFrontendSettingsQuery(settings ? skipToken : undefined);
  const [instanceConnected] = checkSyncSettings(settings || settingsQuery.data);
  return instanceConnected;
}
