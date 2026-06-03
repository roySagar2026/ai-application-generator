export interface GenerationResult {
  success: boolean;
  error?: string;
  configuration?: {
    uiSchema?: any;
    apiSchema?: any;
    databaseSchema?: any;
    authConfig?: any;
    businessLogic?: any;
  };
  stages?: Stage[];
  metadata?: {
    generatedAt: string;
    processingTime: number;
  };
}

export interface Stage {
  name: string;
  description: string;
  status: 'completed' | 'failed' | 'skipped';
}
