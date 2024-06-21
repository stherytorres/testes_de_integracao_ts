import request from "supertest";
import app from "../../../server";

describe("Testes das rotas dos alunos", () => {
    it("Deve retornar todos os alunos", async () => {
        const response = await request(app).get("/aluno");
        expect(response.status).toBe(200);
    });

    it("Deve criar um novo aluno", async () => {
        const novoAluno = {
            nome: "NovoAluno",
            cpf: "12245879968",
        };
        const response = await request(app).post("/aluno").send(novoAluno);

        expect(response.status).toBe(200);
    });
})