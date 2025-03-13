// log de la API

// morgan
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname, 'node-api.log'), { flags: 'a' });

const jsonFormat = (tokens, req, res) => {
    let ip = getIPv4(req);

    return JSON.stringify({
      timestamp: new Date().toISOString(),
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: tokens.status(req, res),
      response_time_ms: Number(tokens['response-time'](req, res)),
      contentLength: tokens.res(req, res, 'content-length'),
      referrer: tokens.referrer(req, res) || null,
      responseTime: tokens['response-time'](req, res),
      host: req.hostname,
      date: tokens.date(req, res),
    //   headers: req.headers,
      body: req.body || {},
      cookies: req.cookies || {},
      ip: ip, // La IP de la solicitud
      userAgent: req.headers['user-agent'], // Información del agente de usuario
      queryParams: req.query, // Parámetros de consulta
      bodyParams: req.body, // Cuerpo de la solicitud (si existe)
    });
  };
  const getIPv4 = (req) => {
    const ip = req.ip || req.connection.remoteAddress;
    return ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip; // Convierte IPv6 a IPv4
  };

// Configuración de Morgan para registrar las peticiones en el archivo 'node-api.log'
// Configuración de Morgan para usar el formato JSON
const morganMiddleware = morgan(jsonFormat, { stream: logStream });
// Configuración de Morgan para registrar en consola
const morganConsole = morgan(jsonFormat);

// Función para obtener IPv4 desde req.ip (evita "::1" en localhost)



// También puedes configurar morgan para registrar en consola y archivo
// const morganConsole = morgan('dev'); // Para registros en consola

module.exports = { morganMiddleware, morganConsole };
