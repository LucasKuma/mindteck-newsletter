## ⚙️ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- **Java 17+**  
- **Maven 3.9+**  
- **Node.js 18+**  
- **npm ou yarn**  
- **MySQL**  

---

## 🖥️ Rodando o projeto localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seuusuario/newsletter-app.git
cd newsletter-app
```

Configurar o banco de dados
1.	Abra o MySQL e crie o banco:
  ```bash
  CREATE DATABASE newsletter;
  ```
2.	Configure suas credenciais no terminal:
  ```bash
  export DB_USER=root
  export DB_PASSWORD=sua_senha
  ```
3. Rodar o backend (Spring Boot)
   ```bash
   cd backend
    mvn clean spring-boot:run
   ```

	•	O backend ficará disponível em: http://localhost:8080
	•	Rotas principais:
	•	POST /api/newsletter → cadastra email
	•	DELETE /api/newsletter → remove email (unsubscribe)

4. Rodar o frontend (React + TypeScript)
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
	•	O frontend ficará disponível em http://localhost:5173 (ou porta indicada pelo Vite)
	•	Certifique-se que o backend está rodando em http://localhost:8080 para que o formulário funcione.
   
