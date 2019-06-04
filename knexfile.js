module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/budget.db',
    },
    useNullAsDefault: true,
  },
};
