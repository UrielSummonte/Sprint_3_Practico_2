import { body, validationResult } from "express-validator";

export const validarSuperheroe = [
  // Valido que el nombreSuperHeroe no este vacio, tenga entre 3 y 60 caracteres y elmino blancos
  body("nombreSuperHeroe")
    .trim()
    .notEmpty()
    .withMessage("El nombre de superhéroe no puede estar vacio")
    .isLength({ min: 3, max: 60 })
    .withMessage(
      "El nombre del superhéroe debe tener entre 3 y 60 caracateres"
    ),

  // Valido que el nombreSuperHeroe no este vacio, tenga entre 3 y 60 caracteres y elmino blancos
  body("nombreReal")
    .trim()
    .notEmpty()
    .withMessage("El nombre real del superhéro no puede estar vacio")
    .isLength({ min: 3, max: 60 })
    .withMessage(
      "El nombre real del superhéroe debe tener entre 3 y 60 caracateres"
    ),

  // Validación que edad no este vacio, sea un entero mayor que 0, no tenga espacios y elimino blancos
  body("edad")
    .trim()
    .notEmpty()
    .withMessage("La edad es un campo obligatorio.")
    .isInt({ min: 0 })
    .withMessage("La edad debe ser un número entero y no puede ser negativa.")
    .custom((value) => {
      if (value.toString().includes(" ")) {
        throw new Error("La edad no debe contener espacios.");
      }
      return true;
    }),

  // Valido que  poderes sea un array de string no vacio
  // y que cada elemento no tenga blancos y una longitud entre 3 y 60 caracteres
  body("poderes")
    .isArray({ min: 1 })
    .withMessage(
      "Poderes es un campo obligatorio y debe ser un array con al menos un elemento string."
    )
    .custom((poderes) => {
      for (let poder of poderes) {
        if (typeof poder !== "string") {
          throw new Error("Cada poder debe ser un string.");
        }
        if (poder.length < 3 || poder.length > 60) {
          throw new Error("Cada poder debe tener entre 3 y 60 caracteres.");
        }
      }
      poderes = poderes.map((poder) => poder.trim()); // Elimina espacios en blanco de cada poder
      return true;
    }),
  (req, res, next) => {
    // Manejo de errores de validacion
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Si no hay errores, se llama al controlador para insertar superheroe
    next();
  },
];
