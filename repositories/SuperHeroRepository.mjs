import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    try {
      return await SuperHero.findById(id);
    } catch (error) {
      console.error("Error al obtener el superhéroe por id:", error);
      throw error;
    }
  }

  async obtenerTodos() {
    try {
      return await SuperHero.find({});
    } catch (error) {
      console.error("Error al obtener todos los superhéroes:", error);
      throw error;
    }
  }

  async buscarPorAtributo(atributo, valor) {
    try {
      const query = { [atributo]: new RegExp(valor, "i") };
      return await SuperHero.find(query);
    } catch (error) {
      console.error("Error al buscar superhéroes por atributo:", error);
      throw error;
    }
  }

  async obtenerMayoresDe30() {
    try {
      return await SuperHero.find({
        edad: { $gt: 30 },
        planetaOrigen: "Tierra",
        $expr: { $gte: [{ $size: "$poderes" }, 2] }, // Compara el tamaño del array "poderes" con 2
      });
    } catch (error) {
      console.error(
        "Error al obtener superhéroes mayores de 30, planeta tierra y con 2 o mas poderes:",
        error
      );
      throw error;
    }
  }

  async insertarSuperheroe(datos) {
    try {
      return await SuperHero.create(datos);
    } catch (error) {
      console.error("Error al insertar el superhéroe:", error);
      throw error;
    }
  }

  async editarSuperheroe(nombreSuperheroe, datos) {
    try {
      // Usamos findOneAndUpdate con { new: true } para obtener el documento actualizado
      return await SuperHero.findOneAndUpdate(
        { nombreSuperHeroe: nombreSuperheroe }, // Filtro por nombreSuperheroe
        { $set: datos }, // Datos a actualizar
        { new: true } // Devuelve el documento actualizado
      );
    } catch (error) {
      console.error("Error al editar el superhéroe:", error);
      throw error;
    }
  }

  async eliminarSuperheroePorId(id) {
    try {
      // Usamos findByIdAndDelete para obtener el documento actualizado
      return await SuperHero.findByIdAndDelete(id);
    } catch (error) {
      console.error("Error al eliminar el superhéroe por id:", error);
      throw error;
    }
  }

  async eliminarSuperheroePorNombre(nombreSuperheroe) {
    try {
      // Usamos findByIdAndDelete para obtener el documento actualizado
      return await SuperHero.findOneAndDelete(
        { nombreSuperHeroe: nombreSuperheroe },
      );
    } catch (error) {
      console.error("Error al eliminar el superhéroe por nombre:", error);
      throw error;
    }
  }


}

export default new SuperHeroRepository();
