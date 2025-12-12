/**
 * Middleware de log des requêtes HTTP
 * Affiche la méthode, l’URL et la date
 */
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;