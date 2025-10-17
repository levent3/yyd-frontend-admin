// src/services/validationRuleService.ts
import api from './api';

export interface ValidationRule {
  id: number;
  entityType: string; // "donation", "donor", "campaign", "volunteer", "contact"
  fieldName: string; // "donorName", "email", "phoneNumber", "amount"
  ruleType: string; // "regex", "minLength", "maxLength", "required", "custom", "enum", "min", "max"
  ruleValue?: string; // Regex pattern, min/max değer, veya JSON config
  errorMessage: {
    tr: string;
    en?: string;
    ar?: string;
    [key: string]: string | undefined;
  };
  priority: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateValidationRuleData {
  entityType: string;
  fieldName: string;
  ruleType: string;
  ruleValue?: string;
  errorMessage: {
    tr: string;
    en?: string;
    ar?: string;
    [key: string]: string | undefined;
  };
  priority?: number;
  isActive?: boolean;
}

export interface UpdateValidationRuleData extends Partial<Omit<CreateValidationRuleData, 'entityType' | 'fieldName' | 'ruleType'>> {}

export interface ValidationRuleFilters {
  entityType?: string;
  fieldName?: string;
  isActive?: boolean;
}

export interface ValidationTemplate {
  entityType: string;
  fieldName: string;
  rules: Array<{
    ruleType: string;
    ruleValue?: string;
    errorMessage: {
      tr: string;
      en?: string;
      ar?: string;
    };
    priority: number;
  }>;
}

export interface ApplyTemplateData {
  entityType: string;
  fieldName: string;
}

const validationRuleService = {
  // Get all validation rules (Admin)
  getAllRules: async (filters?: ValidationRuleFilters): Promise<ValidationRule[]> => {
    const params = new URLSearchParams();
    if (filters?.entityType) params.append('entityType', filters.entityType);
    if (filters?.fieldName) params.append('fieldName', filters.fieldName);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());

    const response = await api.get<ValidationRule[]>(`/validation-rules?${params.toString()}`);
    return response.data;
  },

  // Get validation rule templates (Admin)
  getTemplates: async (): Promise<ValidationTemplate[]> => {
    const response = await api.get<ValidationTemplate[]>('/validation-rules/templates');
    return response.data;
  },

  // Apply validation template (Admin)
  applyTemplate: async (data: ApplyTemplateData): Promise<ValidationRule[]> => {
    const response = await api.post<ValidationRule[]>('/validation-rules/templates/apply', data);
    return response.data;
  },

  // Get rules by entity type (Admin)
  getRulesByEntity: async (entityType: string): Promise<ValidationRule[]> => {
    const response = await api.get<ValidationRule[]>(`/validation-rules/entity/${entityType}`);
    return response.data;
  },

  // Get validation rule by ID (Admin)
  getRuleById: async (id: number): Promise<ValidationRule> => {
    const response = await api.get<ValidationRule>(`/validation-rules/${id}`);
    return response.data;
  },

  // Create validation rule (Admin)
  createRule: async (data: CreateValidationRuleData): Promise<ValidationRule> => {
    const response = await api.post<ValidationRule>('/validation-rules', data);
    return response.data;
  },

  // Update validation rule (Admin)
  updateRule: async (id: number, data: UpdateValidationRuleData): Promise<ValidationRule> => {
    const response = await api.put<ValidationRule>(`/validation-rules/${id}`, data);
    return response.data;
  },

  // Toggle validation rule active status (Admin)
  toggleRuleActive: async (id: number, isActive: boolean): Promise<ValidationRule> => {
    const response = await api.patch<ValidationRule>(`/validation-rules/${id}/toggle`, { isActive });
    return response.data;
  },

  // Delete validation rule (Admin)
  deleteRule: async (id: number): Promise<void> => {
    await api.delete(`/validation-rules/${id}`);
  },
};

export default validationRuleService;
