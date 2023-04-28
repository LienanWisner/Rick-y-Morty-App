const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("species");
      expect(body).toHaveProperty("gender");
      expect(body).toHaveProperty("status");
      expect(body).toHaveProperty("origin");
      expect(body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/90000").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Email y Password Correctas", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login/?email=lien.argentina@gmail.com&password=123123"
      );
      expect(body).toEqual({ access: true });
    });
    it("Email y Password Incorrectas", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login/?email=notengounmango@gmail.com&password=123asd"
      );
      expect(body).toEqual({ access: false });
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Lo que envíes por body debe ser devuelto en un arreglo:", async () => {
      const { body } = await agent
        .post("/rickandmorty/fav")
        .send({ id: 999, name: "Lien" });
      expect(body).toEqual([{ id: 999, name: "Lien" }]);
    });
    it("Devuelve el nuevo elemento en un arreglo que incluye al anterior", async () => {
      const { body } = await agent
        .post("/rickandmorty/fav")
        .send({ id: 123123, name: "Martin capo" });
      expect(body).toEqual([
        { id: 999, name: "Lien" },
        { id: 123123, name: "Martin capo" },
      ]);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID no existe, retornar un array con todos los favs", async () => {
      const response = await agent.delete("/rickandmorty/fav/2gh56");
      expect(response.body.length).toBe(2);
    });
    it("Si el ID enviado existe, deberia eliminarlo de favs", async () => {
      const response = await agent.delete("/rickandmorty/fav/999");
      expect(response.body.length).toBe(1);
    });
  });
});
