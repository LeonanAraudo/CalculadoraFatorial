"use client"
import { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function PermutacaoSimples() {
    const [num1, setNum1] = useState()
    const [resultado, setResultado] = useState(null);

    function fatorial(n) {
        let resultadoPermuta = 1;
        for (let i = n; i > 1; i--) {
            resultadoPermuta *= i
        }
        return resultadoPermuta;
    }
    function calculo() {
        setResultado(fatorial(Number(num1)))
    }

    return (
        <>
            <div className="w-[100%] h-[100%] flex items-center justify-center flex-col bg-gray-200">
                <p className="text-[25px]"><strong>Permutação Simples</strong></p>
                <div className="w-[80%]">
                    <section>
                        <p>  Permutação simples é um tipo de contagem usada na análise combinatória que calcula o número de maneiras diferentes
                            de organizar todos os elementos de um conjunto, sem repetição e levando em conta a ordem.
                        </p>
                    </section>
                    <section>
                        <p>
                            Por exemplo, ao organizar 3 letras diferentes (A, B e C), existem 6 formas distintas (ABC, ACB, BAC, BCA, CAB, CBA).
                            A fórmula para calcular a permutação simples de n elementos é P(n) = n!, onde "n!" significa fatorial de n.
                        </p>
                    </section>
                </div>
                <p><strong>Digite o número para fatorar</strong></p>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Total de elementos"
                        onChange={(e) => setNum1(e.target.value)}
                        value={num1}
                        type="number"
                        id="outlined-size-small"
                        size="small"
                    />
                </Box>
                <Stack spacing={2} direction="row">
                    <Button onClick={calculo} variant="contained">Calcular</Button>
                </Stack>
                {resultado && <p>Resultado: {resultado}</p>}
            </div>

        </>
    )
}