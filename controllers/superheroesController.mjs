import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, insertarSuperheroeService, editarSuperheroeService, eliminarSuperheroePorIdService, eliminarSuperheroePorNombreService } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);

        if (superheroe) {
            res.send(renderizarSuperheroe(superheroe));
        } else {
            res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        }
    } catch (error) {
        console.error("Error en obtener el superheroe por id:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        res.send(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        console.error("Error en obtener todos los superheroes:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}

export async function buscarSuperheroePorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

        if (superheroes.length > 0) {
            res.send(renderizarListaSuperheroes(superheroes));
        } else {
            res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
        }
    } catch (error) {
        console.error("Error en buscar los superheroes por atributo:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        res.send(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        console.error("Error en obtener los superheroes mayores de 30:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}

export async function insertarSuperheroeController(req, res) {
    try {
        const datos = req.body;
        const superheroe = await insertarSuperheroeService(datos);
        if (superheroe) {
            res.send(renderizarSuperheroe(superheroe));
        } else {
            res.status(400).send({ mensaje: "No se pudo crear el superhéroe" });
        }
    } catch (error) {
        console.error("Error en insertarSuperheroeController:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}

export async function editarSuperheroeController(req, res) {
    try {
        const { nombreSuperheroe } = req.params;
        const datos = req.body;
        const superheroe = await editarSuperheroeService(nombreSuperheroe, datos);
        if (superheroe) {
            res.send(renderizarSuperheroe(superheroe));
        } else {
            res.status(400).send({ mensaje: "No se pudo editar el superhéroe" });
        }
    } catch (error) {
        console.error("Error en editarSuperheroeController:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}

export async function eliminarSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await eliminarSuperheroePorIdService(id);
        if (superheroe) {
            res.send(renderizarSuperheroe(superheroe));
        } else {
            res.status(400).send({ mensaje: "No se pudo eliminar el superhéroe por id" });
        }
    } catch (error) {
        console.error("Error en eliminarSuperheroePorIdController:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    try {
        const { nombreSuperheroe } = req.params;
        const superheroe = await eliminarSuperheroePorNombreService(nombreSuperheroe);
        if (superheroe) {
            res.send(renderizarSuperheroe(superheroe));
        } else {
            res.status(400).send({ mensaje: "No se pudo eliminar el superhéroe por nombre" });
        }
    } catch (error) {
        console.error("Error en eliminarSuperheroePorNombreController:", error);
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
}


