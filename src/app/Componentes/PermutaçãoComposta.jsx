"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function CardWithForm() {
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
        <Card className="w-[100%]">
            <CardHeader>
                <CardTitle>Permutação Composta</CardTitle>
                <CardDescription>
                    Permutação composta é utilizada quando há elementos repetidos em um conjunto.
                    Diferente da permutação simples, onde todos os elementos são distintos, aqui algumas
                    posições são ocupadas por elementos iguais, e por isso, devemos dividir para evitar
                    contar arranjos repetidos.
                    A fórmula é P(n; a, b, c, ...) = n! / (a! × b! × c! ...), onde "n" é o total de
                    elementos e "a", "b", "c", etc., são as quantidades de elementos repetidos de cada tipo.
                    Por exemplo, na palavra "ANA", temos 3 letras com o "A" repetido duas vezes. A permutação
                    composta será 3! / 2! = 3.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Número</Label>
                            <Input id="name" onChange={(e) => setNumCom(e.target.value)}
                                value={numCom}
                                type="number" placeholder="Digite o número que deseja fatorar" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Repetição 1</Label>
                            <Input id="name"
                                onChange={(e) => setNumCom1(e.target.value)}
                                value={numComRep1}
                                type="number"
                                placeholder="Digite a quantidade da primeira repetição" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Repetição 2</Label>
                            <Input id="name"
                                onChange={(e) => setNumCom2(e.target.value)}
                                value={numComRep2}
                                type="number"
                                placeholder="Digite a quantidade da segunda repetição " />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={calculo2}>Calcular</Button>
                {resultado2 && <p>Resultado: {resultado2}</p>}
            </CardFooter>
        </Card>
    )
}
