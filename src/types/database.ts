// Auto-generated types for Supabase — keep in sync with migrations

export type Jurisdiction = 'india' | 'usa' | 'uk' | 'international';
export type SourceType = 'constitution' | 'statute' | 'case-law' | 'regulation' | 'commentary';
export type SupportedLanguage = 'en' | 'hi' | 'bn' | 'ta' | 'mr' | 'te';

export interface Database {
  public: {
    Tables: {
      legal_documents: {
        Row: {
          id: string;
          title: string;
          content: string;
          simplified_content: string;
          category_id: string;
          topic_id: string;
          jurisdiction: Jurisdiction;
          language: SupportedLanguage;
          source_title: string;
          source_section: string;
          source_type: SourceType;
          source_url: string | null;
          chunk_index: number;
          embedding: number[] | null;
          metadata: Record<string, unknown> | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['legal_documents']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['legal_documents']['Insert']>;
      };
      categories: {
        Row: {
          id: string;
          name: string;
          description: string;
          icon: string;
          color: string;
          jurisdiction: Jurisdiction;
          topic_count: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['categories']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['categories']['Insert']>;
      };
      bookmarks: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['bookmarks']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['bookmarks']['Insert']>;
      };
      user_preferences: {
        Row: {
          user_id: string;
          jurisdiction: Jurisdiction;
          language: SupportedLanguage;
          theme: 'light' | 'dark';
          updated_at: string;
        };
        Insert: Database['public']['Tables']['user_preferences']['Row'];
        Update: Partial<Database['public']['Tables']['user_preferences']['Insert']>;
      };
      legal_aid_resources: {
        Row: {
          id: string;
          name: string;
          type: 'helpline' | 'organization' | 'government' | 'ngo';
          phone: string | null;
          email: string | null;
          website: string | null;
          description: string;
          state: string | null;
          jurisdiction: Jurisdiction;
          specialization: string[];
          is_emergency: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['legal_aid_resources']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['legal_aid_resources']['Insert']>;
      };
    };
    Functions: {
      match_legal_documents: {
        Args: {
          query_embedding: number[];
          match_threshold: number;
          match_count: number;
          filter_jurisdiction?: Jurisdiction;
          filter_language?: SupportedLanguage;
          filter_category?: string;
        };
        Returns: Array<
          Database['public']['Tables']['legal_documents']['Row'] & {
            similarity: number;
          }
        >;
      };
    };
  };
}
