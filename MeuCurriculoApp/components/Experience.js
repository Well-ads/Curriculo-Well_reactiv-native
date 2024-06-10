// components/Experience.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Experience = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>GERENTE DE ESPORTE & LAZER | AUTARQUIA TERRITORIAL DISTRITO ESTADUAL DE FERNANDO DE
                NORONHA – ATDEFN de julho 2010 – novembro 2019.

                Atuei realizando ações de planejamento, gestão administrativa,
                coordenação pedagógica e execução das ações de esportes, lazer e cultura
                da Superintendência de Turismo, Cultura, Esportes e Lazer da ATDEFN,
                com foco na gestão pública e em ações a nível local, nacional e
                internacional.


                COORDENADOR PEDAGÓGICO | SEC. TURISMO, CULTURA, ESPORTES E LAZER DA PREFEITURA DO RECIFE
                novembro 2019 – junho 2023.

                Atuei como coordenador pedagógico do Programa Esportes nos
                COMPAZ, projeto social Gol do Brasil CBF/FIFA- Recife, em eventos
                esportivos e em processo adminstrativo da gestão pública da secretaria.


                GESTOR DE ESPORTES EDUCACIONAIS | SECRETARIA DE EDUCAÇÃO DA PREFEITURA DA CIDADE DO RECIFE – SEDUC
                julho 2023 – dias atuais

                Atualmente responsável pela gestão das políticas públicas de esportes
                educacionais da rede municipal de ensino da SEDUC e de eventos esportivos.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    }
});

export default Experience;
