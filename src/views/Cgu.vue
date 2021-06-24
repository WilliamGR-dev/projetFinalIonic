<template>
  <section style="height: 100vh;width: 100%;" class="d-flex flex-wrap">
    <section style="height: 100vh;width: 100%" class="">
      <div class="h-100 p-4">
        <div class="h-100 scroll">
          <hr>
          <h3 class="text-white" style="margin-top: 20px">Informations Clients</h3>
          <div class="d-flex flex-column w-100">
            <div class="w-100">
              <h3>Youzik autorisation</h3>
              <div class="rounded-1 bg-light p-5 text-dark w-100">
                Enura Indula<br>
                371/C, Kapuwatta Rd,<br>
                Kandana,<br>
                Sri Lanka.<br>
                Tel:  0765464362<br>
              </div>
            </div>
            <div class="w-100"  >
              <h4 class="w-100">Termes et conditions</h4>
              <div class="w-100 scroll" style="overflow-y: scroll;height: 400px">
                Bienvenue sur le site Web YouZik!

                Ces termes et conditions décrivent les règles et réglementations relatives à l'utilisation du site Web de YouZik, situé à youzik.com.

                En accédant à ce site Web, nous supposons que vous acceptez ces termes et conditions. Ne continuez pas à utiliser le site Web YouZik si vous n'acceptez pas toutes les conditions générales énoncées sur cette page.

                La terminologie suivante s'applique aux présentes conditions générales, à la déclaration de confidentialité et à l'avis de non-responsabilité et à tous les accords: «Client», «Vous» et «Votre» font référence à vous, la personne connectée à ce site Web et conforme aux conditions générales de la société. «L'entreprise», «nous-mêmes», «nous», «notre» et «nous» désignent notre entreprise. «Partie», «Parties» ou «Nous» désigne à la fois le Client et nous-mêmes. Toutes les conditions font référence à l'offre, à l'acceptation et à la prise en compte du paiement nécessaires pour entreprendre le processus de notre assistance au client de la manière la plus appropriée dans le but exprès de répondre aux besoins du client en ce qui concerne la fourniture des services déclarés de la société, conformément à et sous réserve de la loi en vigueur aux Pays-Bas. Toute utilisation de la terminologie ci-dessus ou d'autres mots au singulier, au pluriel, en majuscules et / ou il / elle ou eux, sont considérés comme interchangeables et donc comme faisant référence à ceux-ci.

                Biscuits
                Nous utilisons des cookies. En accédant au site Web YouZik, vous avez accepté d'utiliser des cookies en accord avec la politique de confidentialité de YouZik.

                La plupart des sites Web interactifs utilisent des cookies pour nous permettre de récupérer les détails de l'utilisateur à chaque visite. Les cookies sont utilisés par notre site Web pour activer la fonctionnalité de certaines zones afin de faciliter la visite des personnes visitant notre site Web. Certains de nos affiliés / partenaires publicitaires peuvent également utiliser des cookies.

                Licence
                Sauf indication contraire, YouZik et / ou ses concédants de licence détiennent les droits de propriété intellectuelle pour tout le matériel sur le site Web YouZik. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder à partir du site Web YouZik pour votre usage personnel, sous réserve des restrictions définies dans les présentes conditions générales.

                Il ne faut pas:

                Republier le matériel du site Web YouZik
                Vendre, louer ou sous-licencier du matériel du site Web YouZik
                Reproduire, dupliquer ou copier du matériel du site Web YouZik
                Redistribuer le contenu du site Web YouZik
                Le présent accord commencera à la date des présentes.

                Certaines parties de ce site Web offrent aux utilisateurs la possibilité de publier et d'échanger des opinions et des informations dans certaines zones du site Web. YouZik ne filtre pas, ne modifie pas, ne publie pas et ne révise pas les commentaires avant leur présence sur le site Web. Les commentaires ne reflètent pas les points de vue et les opinions de YouZik, de ses agents et / ou affiliés. Les commentaires reflètent les points de vue et les opinions de la personne qui publie ses points de vue et opinions. Dans la mesure permise par les lois applicables, YouZik ne sera pas responsable des commentaires ou de toute responsabilité, dommages ou dépenses causés et / ou subis à la suite de toute utilisation et / ou publication et / ou apparition des commentaires sur ce site Internet.

                YouZik se réserve le droit de surveiller tous les commentaires et de supprimer tout commentaire qui peut être considéré comme inapproprié, offensant ou qui entraîne une violation des présentes conditions générales.

                Vous garantissez et déclarez que:

                Vous avez le droit de publier les commentaires sur notre site Web et de disposer de toutes les licences et consentements nécessaires pour le faire;
                Les Commentaires n'envahissent aucun droit de propriété intellectuelle, y compris, sans limitation, les droits d'auteur, brevets ou marques de commerce d'un tiers;
                Les commentaires ne contiennent aucun matériel diffamatoire, calomnieux, offensant, indécent ou autrement illégal qui constitue une atteinte à la vie privée
                Les commentaires ne seront pas utilisés pour solliciter ou promouvoir des activités commerciales ou personnalisées ou présenter des activités commerciales ou des activités illégales.
                Vous accordez par la présente à YouZik une licence non exclusive pour utiliser, reproduire, éditer et autoriser d'autres personnes à utiliser, reproduire et éditer l'un de vos commentaires sous tous les formats, formats ou supports.

                Hyperliens vers notre contenu
                Les organisations suivantes peuvent créer un lien vers notre site Web sans autorisation écrite préalable:

                Organismes gouvernementaux;
                Moteurs de recherche;
                Organisations de presse;
                Les distributeurs d'annuaires en ligne peuvent créer un lien vers notre site Web de la même manière qu'ils créent un lien hypertexte vers les sites Web d'autres entreprises cotées; et
                Entreprises accréditées à l'échelle du système, à l'exception de la sollicitation d'organisations à but non lucratif, de centres commerciaux caritatifs et de groupes de collecte de fonds caritatifs qui ne peuvent pas créer de lien hypertexte vers notre site Web.
                Ces organisations peuvent créer un lien vers notre page d'accueil, vers des publications ou vers d'autres informations sur le site Web à condition que le lien: (a) ne soit en aucun cas trompeur; (b) n'implique pas à tort un parrainage, une approbation ou une approbation de la partie liante et de ses produits et / ou services; et (c) s'inscrit dans le contexte du site de la partie liante.
              </div>
            </div>
            <div class="w-100 mt-3 mb-3 d-flex flex-column"  >
                <label class="label">CODE PROMO</label>
                <input type="text" class="form_control text-dark" placeholder="Entrer le code promo" v-model="form.promo">
            </div>
              <div id="card-element"></div>
            <div v-if="planId == 'price_1J2H1vGsegk9YRQoKXhtXvqW'" class="w-100">
              <div class="rounded-1 bg-light p-5 text-dark w-75 d-flex flex-column align-items-center mt-4">
                <h3 class="m-3">PERSONNEL</h3>
                <h3 class="m-3">4,99€/mois</h3>
              </div>
              <div class="w-100 d-flex justify-content-between mt-5">
                <div>Panier</div>
                <div>4,99€</div>
              </div>
              <div class="w-100 d-flex justify-content-between mt-5">
                <div>Total</div>
                <div>4,99€</div>
              </div>
            </div>
            <div v-if="planId == 'price_1J2H2ZGsegk9YRQooblJfbxa'" class="w-100">
              <div class="rounded-1 bg-light p-5 text-dark w-75 d-flex flex-column align-items-center mt-4">
                <h3 class="m-3">Famille</h3>
                <h3 class="m-3">9,99€/mois</h3>
              </div>
              <div class="w-100 d-flex justify-content-between mt-5">
                <div>Panier</div>
                <div>9,99€</div>
              </div>
              <div class="w-100 d-flex justify-content-between mt-5">
                <div>Total</div>
                <div>9,99€</div>
              </div>
            </div>
          </div>
          <button class="btn btn-outline-light mt-4">Annuler</button>
          <button class="btn btn-outline-light mt-4" style="margin-left: 50px" @click.prevent="submit">Payer Maintenant</button>
        </div>
      </div>
    </section>
  </section>
</template>


<script>
import {
    toastController,
} from "@ionic/vue";
import {mapActions, mapGetters} from 'vuex'
import axios from "axios";

export default {
    name: "Cgu",
    data() {
        return {
            secret: null,
            stripe: null,
            payment_method: null,
            requires_action: null,
            payment_intent: null,
            card: null,
            payment_processed: false,
            message_processed: "",
            form: {

            }
        };
    },
    computed: {
        ...mapGetters(['planId']),
        ...mapGetters(['user']),
    },
    methods: {
        ...mapActions(['sessionUpdate']),
        async submit() {
            this.payment_processing = true;
            const { setupIntent, error } = await this.stripe.confirmCardSetup(
                this.secret,
                {
                    payment_method: {
                        card: this.card,
                        billing_details: { name: this.name },
                    },
                }
            );
            if (error) {
                console.log(error);
                const toast = await toastController.create({
                    message: error.message,
                    duration: 2000,
                    color: "danger",
                });
                return toast.present();
            } else {
                console.log(setupIntent);
                this.payment_method = setupIntent.payment_method;
                await axios
                    .post(
                        `${process.env.VUE_APP_API_URL}/stripe/subscribe`,
                        {
                            id: this.user.data.id,
                            plan: this.planId,
                            name: this.user.data.name,
                            payment_method: this.payment_method,
                            coupon: this.form.promo,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${this.token}`,
                            },
                        }
                    )
                    .then((response) => {
                        console.log(response.data);
                        if (
                            response.data.status &&
                            response.data.status == "requires_action"
                        ) {
                            // Confirmation
                            this.$emit('paymentMethod', this.payment_method)
                            this.$emit('requiresAction', true)
                            this.$emit('paymentIntent', response.data)
                        } else {
                            this.sessionUpdate();
                            this.$emit('paymentProcessed', true);
                            this.$emit('messageProcessed', "Merci de votre abonnement ! 🤑");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
    components: {

    },
    mounted(){
        this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);
        const elements = this.stripe.elements();
        this.card = elements.create("card");
        this.card.mount("#card-element");

        axios.post(
            `${process.env.VUE_APP_API_URL}/stripe/intent`,
            {
                id: this.user.data.id,
            },
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            }
        )
            .then((response) => {
                this.secret = response.data.client_secret;
            })
            .catch((error) => {
                console.log(error);
            });

    }

}
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
