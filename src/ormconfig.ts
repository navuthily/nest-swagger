const config:any ={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs1',
  logger: true,
    logging: "all",
    entities: ["dist/**/*.entity{.ts,.js}"],
      migrations: ['src/migration/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migration'
      },
  synchronize: true
}
export default config;  