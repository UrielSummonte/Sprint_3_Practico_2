import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
    try {
        return await SuperHeroRepository.obtenerPorId(id);
    } catch (error) {
        console.error("Error en obtenerSuperheroePorId:", error);
        throw error;
    }
}

export async function obtenerTodosLosSuperheroes() {
    try {
        return await SuperHeroRepository.obtenerTodos();
    } catch (error) {
        console.error("Error en obtenerTodosLosSuperheroes:", error);
        throw error;
    }
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    try {
        return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
    } catch (error) {
        console.error("Error en buscarSuperheroesPorAtributo:", error);
        throw error;
    }
}

export async function obtenerSuperheroesMayoresDe30() {
    try {
        return await SuperHeroRepository.obtenerMayoresDe30();
    } catch (error) {
        console.error("Error en obtenerSuperheroesMayoresDe30:", error);
        throw error;
    }
}

export async function insertarSuperheroeService(datos) {
    try {
        return await SuperHeroRepository.insertarSuperheroe(datos);
    } catch (error) {
        console.error("Error en insertarSuperheroeService:", error);
        throw error;
    }
}

export async function editarSuperheroeService(nombreSuperheroe, datos) {
    try {
        return await SuperHeroRepository.editarSuperheroe(nombreSuperheroe, datos);
    } catch (error) {
        console.error("Error en editarSuperheroeService:", error);
        throw error;
    }
}

export async function eliminarSuperheroePorIdService(id) {
    try {
        return await SuperHeroRepository.eliminarSuperheroePorId(id);
    } catch (error) {
        console.error("Error en eliminarSuperheroePorIdService:", error);
        throw error;
    }
}

export async function eliminarSuperheroePorNombreService(nombreSuperheroe) {
    try {
        return await SuperHeroRepository.eliminarSuperheroePorNombre(nombreSuperheroe);
    } catch (error) {
        console.error("Error en eliminarSuperheroePorNombreService:", error);
        throw error;
    }
}