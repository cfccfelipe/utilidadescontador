<template>
    <div id="Price">
        <h1 align="center">CONOZCA EL PRECIO QUE DEBE COBRAR</h1>
            <b-row>
                <b-col sm= "5">
                    <b-container fluid>
                        <b-row class="my-1">
                            <br> <br>
                            <h4><pre> Por favor ingrese los siguientes datos: </pre></h4>
                        </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                            <label for="costos">Costos:</label>
                        </b-col>
                        <b-col>
                            <b-form-input v-model = "costos" id="costos" placeholder="¿Cuáles son tus costos totales?"></b-form-input>
                        </b-col>               
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                            <label for="porcentaje">Porcentaje:</label>
                        </b-col>
                        <b-col>
                            <b-form-input v-model = "porcentaje" id="porcentaje" placeholder="¿Cuál es el porcentaje que desearías efectivamente recibir? (no incluir %)"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="2">
                            <label for="iva">IVA:</label>
                        </b-col>
                        <b-col>
                            <b-form-input v-model = "iva" id="iva" placeholder="¿Cuál es el porcentaje IVA? (no incluir %)"></b-form-input>
                        </b-col>
                    </b-row> 
                    <b-row class="my-1">
                        <b-col sm="2">
                            <label for="retefuente">Retefuente:</label>
                        </b-col>
                        <b-col >
                            <b-form-input v-model = "retefuente" id="retefuente" placeholder="¿Cuál es la retención en la fuente aplicable? (no incluir %)"></b-form-input>
                        </b-col>
                    </b-row> 
                    <b-row class="my-1">
                        <b-col sm="2">
                            <label for="reteica">Reteica:</label>
                        </b-col>
                        <b-col>
                            <b-form-input v-model = "reteica" id="reteica" placeholder="¿Cuál es la retención (?)/1000 de industria y comercio aplicable?"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col>
                            <b-button @click="persist" variant="success">Calcular</b-button>
                        </b-col>
                        <b-col>
                            <b-button @click="clean" variant="danger">Limpiar</b-button>
                        </b-col>
                    </b-row>
                    </b-container>
                </b-col> 
                <b-col sm= "5">
                    <b-container fluid>
                            <p>Mis costos son  $<span> {{costos}}</span> y deseo recibir efectivamente un <span> {{porcentaje}}</span>% más, equivalente a $<span> {{efectivodeseado}}</span></p>
                        <b-table striped hover :items="items"></b-table>
                    </b-container>
                </b-col>
            </b-row>  

    </div>

</template>

<script>
    export default {
        name: "User_price",
        data() {
            return {
                costos: '',
                porcentaje: '',
                iva: '',
                retefuente: '',
                reteica: '',
                efectivodeseado: '',
                items: [
                        { Item: 'Subtotal', Valor: localStorage.ingreso},
                        { Item: '+ IVA', Valor: localStorage.ivaingreso},
                        { Item: '=Total 1', Valor: localStorage.total1},
                        { Item: '-Retefuente', Valor: localStorage.retefuentet},
                        { Item: '-Reteica', Valor: localStorage.reteicat},
                        { Item: '=Total 2', Valor: localStorage.total2},
                        { Item: '-Iva Por Pagar', Valor: localStorage.ivaingreso},
                        { Item: '=Total Final', Valor: localStorage.efectivorecibido},
                ]
            }
        },
        mounted() {
            if (localStorage.costos) {
            this.costos = localStorage.costos;
            }
            if (localStorage.porcentaje) {
            this.porcentaje = localStorage.porcentaje;
            }
            if (localStorage.iva) {
            this.iva = localStorage.iva;
            }
            if (localStorage.retefuente) {
            this.retefuente = localStorage.retefuente;
            }
            if (localStorage.reteica) {
            this.reteica = localStorage.reteica;
            }
            if (localStorage.efectivodeseado) {
            this.efectivodeseado = localStorage.efectivodeseado;
            }
        },
        methods: {
            persist(){
                localStorage.costos= this.costos;
                localStorage.porcentaje = this.porcentaje;
                localStorage.iva = this.iva;
                localStorage.retefuente = this.retefuente;
                localStorage.reteica = this.reteica;
                if (localStorage.reteica.search(",")){
                    localStorage.reteica = localStorage.reteica.replace((","), ("."))
                } else
                reteica;
                localStorage.efectivodeseado = ((localStorage.costos) * ((localStorage.porcentaje / 100) + 1)).toFixed();
                localStorage.ingreso = ((localStorage.costos) * ((localStorage.porcentaje / 100) + 1)).toFixed(2);
                localStorage.ivaingreso = (localStorage.ingreso * (localStorage.iva / 100)).toFixed(2);
                localStorage.total1 = (Number(localStorage.ingreso) + Number(localStorage.ivaingreso)).toFixed(2);
                localStorage.retefuentet = (localStorage.ingreso * (localStorage.retefuente / 100)).toFixed(2);
                localStorage.reteicat = (localStorage.ingreso * (localStorage.reteica / 1000)).toFixed(2);
                localStorage.total2 = (localStorage.total1 - localStorage.reteicat - localStorage.retefuentet).toFixed(2);
                localStorage.efectivorecibido = (localStorage.total2 - localStorage.ivaingreso).toFixed();


                while (localStorage.efectivorecibido != localStorage.efectivodeseado){

                    if ((localStorage.efectivodeseado - localStorage.efectivorecibido) > 100000){
                        localStorage.ingreso = Number(localStorage.ingreso) + 100000;
                    } else if ((localStorage.efectivodeseado - localStorage.efectivorecibido ) > 10000){
                        localStorage.ingreso = Number(localStorage.ingreso) + 10000;
                    } else if ((localStorage.efectivodeseado - localStorage.efectivorecibido ) > 1000){
                        localStorage.ingreso = Number(localStorage.ingreso) + 1000;
                    } else if ((localStorage.efectivodeseado - localStorage.efectivorecibido ) > 100){
                        localStorage.ingreso = Number(localStorage.ingreso) + 100;
                    } else if ((localStorage.efectivodeseado - localStorage.efectivorecibido ) > 10){
                        localStorage.ingreso = Number(localStorage.ingreso) + 10;
                    } else
                    localStorage.ingreso = Number(localStorage.ingreso) + 1;
                    
                    localStorage.ivaingreso = (localStorage.ingreso * (localStorage.iva / 100)).toFixed(2);
                    localStorage.total1 = (Number(localStorage.ingreso) + Number(localStorage.ivaingreso)).toFixed(2);
                    localStorage.retefuentet = (localStorage.ingreso * (localStorage.retefuente / 100)).toFixed(2);
                    localStorage.reteicat = (localStorage.ingreso * (localStorage.reteica / 1000)).toFixed(2);
                    localStorage.total2 = (localStorage.total1 - localStorage.reteicat - localStorage.retefuentet).toFixed(2);
                    localStorage.efectivorecibido = (localStorage.total2 - localStorage.ivaingreso).toFixed();
                }
                const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
                })
                localStorage.efectivorecibido = formatter.format(localStorage.efectivorecibido);
                localStorage.ingreso = formatter.format(localStorage.ingreso);
                localStorage.total1 = formatter.format(localStorage.total1);
                localStorage.ivaingreso = formatter.format(localStorage.ivaingreso);
                localStorage.total2 = formatter.format(localStorage.total2);
                localStorage.retefuentet = formatter.format(localStorage.retefuentet);
                localStorage.reteicat = formatter.format(localStorage.reteicat);                
                location. reload();
            },
            clean(){
                localStorage.clear(); 
                location. reload();
            },
        }
    }

</script>
