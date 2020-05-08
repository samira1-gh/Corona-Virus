// /////////// Variable ////////

let preambule = document.getElementById('préambule');
let questionnaire = document.getElementById('question');
let resultat = document.getElementById('resultats');

let stp1 = document.getElementById('button1');
let stp2 = document.getElementById('btn-3');
let stp3 = document.getElementById('button2');
let steper = document.getElementsByClassName('part1');
stp1.addEventListener('click', moveSt2);
stp2.addEventListener('click', moveSt3);
stp3.addEventListener('click', moveSt1);

function moveSt2() {

    preambule.style.display = 'none';
    questionnaire.style.display = 'block';
    steper[0].classlist.remove('part1__sam');
    steper[1].classlist.add('part1__sam');

}



function moveSt3() {
    preambule.style.display = 'none';
    questionnaire.style.display = 'none';
    steper[1].classlist.remove('part1__sam');
    steper[2].classlist.add('part1__sam');
}

function moveSt1() {
    preambule.style.display = 'flex';
    questionnaire.style.display = 'none';
    resultat.style.display = 'none';
    steper[2].classlist.remove('part1__sam');
    steper[0].classlist.add('part1__sam');
}



// const questions = [
//     '<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question--c">Quelle est votre température corporelle ?</p> <div class="answer-inputs"><input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42"><span class="input-span">degrés</span></div>',
//     '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question--quatre">Actuellement, comment vous vous sentez ? </p><div class="answer-inputs"><div> <input type="radio" name="Q10" id="Bien"><label for="Bien"><span>Bien</span> </label> </div><div><input type="radio" name="Q10" id="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div> <div> <input type="radio" name="Q10" id="Fatigué(e)">  <label for="Fatigué(e)">  <span>Fatigué(e)</span> </label>    </div>    <div>        <input type="radio" name="Q10" id="Très fatigué">      <label for="Très fatigué">      <span>Très fatigué</span> </label>  </div></div>',
//     '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p><div  class="answer-inputs""> <input type="number" id="reponce1" placeholder="17 - 120" min="17" max="120"><span class="input-span">Age</span></div><br><br></br>',
//     '<p class="form__question--poids">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p><div  class="answer-inputs""><input type="number" id="reponce1"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div><br><br></br>',
//     '<p class="form__question--taille">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p> <div  class="answer-inputs""><input type="number" id="reponce1" min="100" max="260" placeholder="100 - 260"><span class="input-span">Cm</span></div><br><br></br>',
//     '<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Êtes-vous diabétique ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie chronique du foie ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     ' <p class="form__question--trois">Êtes-vous enceinte ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div><div><input type="radio" name="Q1" id="Homme" value ="Homme"><label for="Homme"><span>Homme</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     ' <p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
// ]