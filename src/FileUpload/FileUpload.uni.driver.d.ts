import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FileUploadUniDriver extends BaseUniDriver {
  simulateUpload(file: File): Promise<void>;
}
