/**
 * Constant values of the application.
 */

/** Path to the root directory of the project. */
export const rootDir: string = __dirname;

/** 
 * Default port the server is listen on. Their shouldn´t be
 * any use cases to change this port, as the entire application
 * is running inside a `docker` container. To change the server
 * port, use the `docker-compose.yml` file `ports` property
 * instead.
 */
export const port = 3000;