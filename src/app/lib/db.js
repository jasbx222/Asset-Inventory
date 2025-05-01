import sql from 'mssql';

const config = {
  user: 'sa',     
  password: '1',
  server: '127.0.0.1', 
  database: 'InveTech2',
  options: {
    encrypt: false,           // إذا كان السيرفر محلي بدون SSL
    trustServerCertificate: true, // مهم غالبًا للبيئات المحلية
  },
  port: 1433,                 // بورت MSSQL الافتراضي
};

let pool;

export async function connectToDatabase() {
  if (pool) {
    return pool;
  }
  try {
    pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error('Database Connection Failed:', error);
    throw error;
  }
}
