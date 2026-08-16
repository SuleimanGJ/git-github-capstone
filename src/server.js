import { PORT } from "./config/index.js";
import app from "./app.js";

connectDB.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
})