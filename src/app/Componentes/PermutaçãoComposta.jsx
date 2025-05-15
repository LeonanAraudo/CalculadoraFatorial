"use client"
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function PermutacaoComposta() {
    const [numCom, setNumCom] = useState()
    const [numComRep1, setNumCom1] = useState();
    const [numComRep2, setNumCom2] = useState();
    const [resultado2, setResultado2] = useState(null);

    function fatorialComposto(a, b, c) {
        let resultadoPermuta = 1;
        for (let i = a; i > 1; i--) {
            resultadoPermuta *= i
        }
        let numRepetido = 1;
        for (let i = b; i > 1; i--) {
            numRepetido *= i
        }
        let numRepetido2 = 1;
        for (let i = c; i > 1; i--) {
            numRepetido2 *= i
        }
        let calculoPermutaComposta = resultadoPermuta / (numRepetido * numRepetido2)
        return calculoPermutaComposta;
    }
    function calculo2() {
        setResultado2(fatorialComposto(Number(numCom, numComRep1, numComRep2)))
    }
    return (
        <div className="w-[100%] h-[100%] flex items-center justify-center flex-col bg-gray-200">
            <p className="text-[25px]"><strong>Permutação Composta</strong></p>
            <div className="w-[80%]">
                <section>
                    <p>
                        <p>
                            Permutação composta é utilizada quando há elementos repetidos em um conjunto.
                            Diferente da permutação simples, onde todos os elementos são distintos, aqui algumas
                            posições são ocupadas por elementos iguais, e por isso, devemos dividir para evitar
                            contar arranjos repetidos.
                        </p>
                    </p>
                </section>
                <section>
                    <p>
                        <p>
                            A fórmula é P(n; a, b, c, ...) = n! / (a! × b! × c! ...), onde "n" é o total de
                            elementos e "a", "b", "c", etc., são as quantidades de elementos repetidos de cada tipo.
                            Por exemplo, na palavra "ANA", temos 3 letras com o "A" repetido duas vezes. A permutação
                            composta será 3! / 2! = 3.
                        </p>
                    </p>
                </section>
            </div>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Total de elementos"
                    onChange={(e) => setNumCom(e.target.value)}
                    value={numCom}
                    type="number"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    label="Repetição 1"
                    onChange={(e) => setNumCom1(e.target.value)}
                    value={numComRep1}
                    type="number"
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    label="Repetição 2"
                    onChange={(e) => setNumCom2(e.target.value)}
                    value={numComRep2}
                    type="number"
                    id="outlined-size-small"
                    size="small"
                />
            </Box>
            <Stack spacing={2} direction="row">
                <Button onClick={calculo2} variant="contained">Calcular</Button>
            </Stack>

            {resultado2 && <p>Resultado: {resultado2}</p>}

        </div>

    )
}