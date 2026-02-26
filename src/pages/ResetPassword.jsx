import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { AXIOS } from "../services"


export default function ResetPassword() {
    const [seachParams] = useSearchParams();
    const navigate = useNavigate();
    const token = seachParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }
         try {
            setLoading(true);
            await AXIOS.post("/reset-password", {
                token,
                password,
            });

            setSuccess("Senha alterada com sucesso! Redirecionando para o login...");
            
            setTimeout(() => {
                navigate("/login");
            }, 2000);
         } catch (err) {
            setError(
                err.response?.data?.message || "Erro ao alterar a senha. Tente novamente."
            );
         } finally {
            setLoading(false);
         }
    }

    return (
        <div className="">
            <main className="">
            <div>
                <h1 className="">
                    Redefinir senha
                    </h1>

                    <p className="">
                        digite sua nova senha abaixo.
                    </p>

                    {error && (
                        <div className="">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                        type="password"
                        placeholder="Nova senha"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=""
                        />

                        <input 
                        type="password"
                        placeholder="Confirmar nova senha"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className=""
                        />

                        <button 
                        type="submit"
                        disabled={loading || !token}
                        className=""
                        >

                            {loading ? "Salvando..." : "Alterar senha"}
                        </button>
                    </form>

                    {!token && (
                        <p className="">
                            Token inválido ou expirado
                        </p>
                    )}
            </div>
            </main>
        </div>
    );
}