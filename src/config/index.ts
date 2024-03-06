import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

interface Config {
  line: {
    channelAccessToken: string;
    channelSecret: string;
  };
  supabase: {
    url: string;
    anonKey: string;
  };
  port: number | string;
}

// Ensure all necessary environment variables are set
const config: Config = {
  line: {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
    channelSecret: process.env.LINE_CHANNEL_SECRET || '',
  },
  supabase: {
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || '',
  },
  port: process.env.PORT || 3000,
};

// Validate critical configuration to ensure the application can start successfully
if (!config.line.channelAccessToken || !config.line.channelSecret) {
  console.error('Missing LINE configuration');
  process.exit(1);
}

if (!config.supabase.url || !config.supabase.anonKey) {
  console.error('Missing Supabase configuration');
  process.exit(1);
}

export { config };
