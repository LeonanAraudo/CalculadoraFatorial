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
        <Card className="w-[100%]">
            <CardHeader>
                <CardTitle>Permutação Simples</CardTitle>
                <CardDescription>
                    Permutação simples é um tipo de contagem usada na análise combinatória que calcula o número de maneiras diferentes
                    de organizar todos os elementos de um conjunto, sem repetição e levando em conta a ordem.
                    Por exemplo, ao organizar 3 letras diferentes (A, B e C), existem 6 formas distintas (ABC, ACB, BAC, BCA, CAB, CBA).
                    A fórmula para calcular a permutação simples de n elementos é P(n) = n!, onde "n!" significa fatorial de n.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Número</Label>
                            <Input id="name"
                                onChange={(e) => setNum1(e.target.value)}
                                value={num1}
                                type="number"
                                placeholder="Digite o número que deseja fatorar" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={calculo}>Calcular</Button>
                {resultado && <p>Resultado: {resultado}</p>}
            </CardFooter>
        </Card>
    )
}
