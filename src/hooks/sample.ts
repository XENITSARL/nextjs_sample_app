const customers = [
    {
        idCustomer: 1,
        nameCustomer: "Regina Cooper",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "active",
        checkedCustomer: false
    },
    {
        idCustomer: 2,
        nameCustomer: "Judith Black",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "blocked",
        checkedCustomer: false
    },
    {
        idCustomer: 3,
        nameCustomer: "Dustin Williampson",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "active",
        checkedCustomer: false
    },
    {
        idCustomer: 4,
        nameCustomer: "Calvin Flores",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "blocked",
        checkedCustomer: false
    },
    {
        idCustomer: 5,
        nameCustomer: "Robert Edson",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "active",
        checkedCustomer: false
    },
    {
        idCustomer: 6,
        nameCustomer: "Regina Cooper",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "active",
        checkedCustomer: false
    },
    {
        idCustomer: 7,
        nameCustomer: "Judith Black",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "blocked",
        checkedCustomer: false
    },
    {
        idCustomer: 8,
        nameCustomer: "Dustin Williampson",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "active",
        checkedCustomer: false
    },
    {
        idCustomer: 9,
        nameCustomer: "Calvin Flores",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "blocked",
        checkedCustomer: false
    },
    {
        idCustomer: 10,
        nameCustomer: "Robert Edson",
        mailCustomer: "cooper@example.com",
        locationCustomer: "Soshia, Russia",
        phoneCustomer: "+1 (070) 123–4567",
        dateCustomer: "12.09.20",
        statusCustomer: "active",
        checkedCustomer: false
    }
]

const transactions = [
    {
        objetTrans: "Commende de ... ",
        transDe: "Auchan",
        transVers: "Ndiogou Seras",
        montantTrans: 30000,
        dateTrans: "22/02/23 ",
        statusTrans: "entrant",
        modeTrans: "Paypal"
    },
    {
        objetTrans: "Commende de ... ",
        transDe: "Auchan",
        transVers: "Ndiogou Seras",
        montantTrans: 30000,
        dateTrans: "22/02/23 ",
        statusTrans: "entrant",
        modeTrans: "Wave"
    },
    {
        objetTrans: "Commende de ... ",
        transDe: "Auchan",
        transVers: "Ndiogou Seras",
        montantTrans: 30000,
        dateTrans: "22/02/23 ",
        statusTrans: "entrant",
        modeTrans: "Paypal"
    },
    {
        objetTrans: "Commende de ... ",
        transDe: "Auchan",
        transVers: "Ndiogou Seras",
        montantTrans: 30000,
        dateTrans: "22/02/23 ",
        statusTrans: "entrant",
        modeTrans: "OM"
    }
]

const messages = [
    {
        id: 1,
        campName: 'Rappel à Dieu de Serigne Salih',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },

    {
        id: 2,
        campName: 'Barkelou Mourid pro',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },

    {
        id: 3,
        campName: 'Donations (barkelou)',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },

    {
        id: 4,
        campName: 'Rappel à Dieu de Serigne Salih',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },

    {
        id: 5,
        campName: 'Barkelou Mourid pro',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },

    {
        id: 6,
        campName: 'Donations (barkelou)',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },

    {
        id: 7,
        campName: 'Donations (barkelou)',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },

    {
        id: 8,
        campName: 'Rappel à Dieu de Serigne Salih',
        campDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
        debut: '28/12/22',
        fin: '-',
        etat: 'Terminées',
        cible: 'IOS',
        lastmaj: '28/12/22',
        envois: '30 à 40',
        click: '<1%',
    },
]


const mercantThs= ["Nom du business","Adresse","Telephone","Date","Statut",""]

const costumerThs= ["Nom du business","Adresse","Telephone","Date","Statut",""]

const financeThs= ["Objet de la transaction","De","Vers","Montant","Date","Statut","Mode de paiment",""]

const messageThs= ["Camapagne","Début","Fin","Etat","Cible","Dernière maj","Envois/impressions","Clicks/Ouvertures"]

const produit = [
    { id: 1, nom: "Mouton", prixA: "3000", prixV: "5000", unit: "Gramme", taxePercent: "18%", desc: "Une description pour l'animal est saisie.", status: "Disponible", photo: "https://media.jumiadeals.com/sn_live/0879a44e2d5f0c41c712b68.mobile-gallery-large.jpg" },
    { id: 2, nom: "Boeuf", prixA: "1500", prixV: "3000", unit: "Kilogramme", taxePercent: "18%", desc: "Une description pour l'animal est saisie.", status: "Indisponible", photo: "https://www.cuisineactuelle.fr/imgre/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcac.2F2022.2F07.2F08.2Fdd6d0fba-365f-4349-88ff-2c4a92954e00.2Ejpeg/1200x1200/quality/80/crop-from/center/qu-est-ce-que-le-boeuf-ethique.jpeg" },
    { id: 3, nom: "Poulet", prixA: "1700", prixV: "2000", unit: "Gramme", taxePercent: "0%", desc: "Une description pour l'animal est saisie.", status: "Disponible", photo: "https://www.lesvolaillesdenicolas.fr/images/Image/POULE-ROUSSE-6-MOIS-1.jpg" },
    { id: 4, nom: "Chévre", prixA: "1000", prixV: "2500", unit: "Kilogramme", taxePercent: "18%", desc: "Une description pour l'animal est saisie.", status: "Indisponible", photo: "https://www.memoireonline.com/03/15/8997/Caracterisation-zootechnique-de-la-chevre-naine-dans-la-commune-de-Parakou9.png" },
    { id: 5, nom: "Agneau", prixA: "4000", prixV: "9000", unit: "Gramme", taxePercent: "0%", desc: "Une description pour l'animal est saisie.", status: "Disponible", photo: "https://wwwdotgretagarburedotcom.files.wordpress.com/2015/02/agneau-des-pyrc3a9nc3a9es-via-agneaudespyrenees-com.jpg" },
    { id: 6, nom: "Veau", prixA: "2000", prixV: "3500", unit: "Kilogramme", taxePercent: "18%", desc: "Une description pour l'animal est saisie.", status: "Disponible", photo: "https://www.agriculteurs-85.fr/wp-content/uploads/2015/04/veau.jpg" },
    { id: 7, nom: "Poulet", prixA: "1700", prixV: "2000", unit: "Gramme", taxePercent: "18%", desc: "Une description pour l'animal est saisie.", status: "Disponible", photo: "https://www.lesvolaillesdenicolas.fr/images/Image/POULE-ROUSSE-6-MOIS-1.jpg" },
    { id: 8, nom: "Chévre", prixA: "1000", prixV: "2500", unit: "Kilogramme", taxePercent: "18%", desc: "Une description pour l'animal est saisie.", status: "Indisponible", photo: "https://www.memoireonline.com/03/15/8997/Caracterisation-zootechnique-de-la-chevre-naine-dans-la-commune-de-Parakou9.png" },
    { id: 9, nom: "Agneau", prixA: "4000", prixV: "9000", unit: "Gramme", taxePercent: "0%", desc: "Une description pour l'animal est saisie.", status: "Disponible", photo: "https://wwwdotgretagarburedotcom.files.wordpress.com/2015/02/agneau-des-pyrc3a9nc3a9es-via-agneaudespyrenees-com.jpg" },
    { id: 10, nom: "Veau", prixA: "2000", prixV: "3500", unit: "Kilogramme", taxePercent: "18%", desc: "Une description pour l'animal est saisie.", status: "Disponible", photo: "https://www.agriculteurs-85.fr/wp-content/uploads/2015/04/veau.jpg" },
]

const produitThs = ["Designation", "Prix d'achat", "Prix de vente", "Status", "Actions"]

const orderThs = ["N. COMMANDE", "CLIENT", "DATE", "TOTAL", "PAYEMENT", "STATUS", ""]

const orders = [
    { id: 190368, client: "Lamine Cissé", date: "16.04.23", total: "5897000", payement: "PayPal", status: "Livrer", },
    { id: 290368, client: "Lamine Cissé", date: "16.04.23", total: "3897000", payement: "Carte Visa", status: "Livrer", },
    { id: 390368, client: "Lamine Cissé", date: "16.04.23", total: "2897000", payement: "PayPal", status: "Livrer", },
    { id: 490368, client: "Lamine Cissé", date: "16.04.23", total: "2897500", payement: "Carte Visa", status: "En cours", },
    { id: 590368, client: "Lamine Cissé", date: "16.04.23", total: "9897000", payement: "PayPal", status: "Annuler", },
    { id: 690368, client: "Lamine Cissé", date: "16.04.23", total: "3897500", payement: "Carte Visa", status: "Livrer", },
    { id: 790368, client: "Lamine Cissé", date: "16.04.23", total: "2897000", payement: "PayPal", status: "Livrer", },
    { id: 890368, client: "Lamine Cissé", date: "16.04.23", total: "2897500", payement: "Carte Visa", status: "Annuler", },
    { id: 990368, client: "Lamine Cissé", date: "16.04.23", total: "9897000", payement: "PayPal", status: "Livrer", },
    { id: 490368, client: "Lamine Cissé", date: "16.04.23", total: "3897500", payement: "Carte Visa", status: "En cours", },
]

const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const month = [
    { id: 1, month: "Janvier" },
    { id: 2, month: "Février" },
    { id: 3, month: "Mars" },
    { id: 4, month: "Avril" },
    { id: 5, month: "Mais" },
    { id: 6, month: "Juin" },
    { id: 7, month: "juillet" },
    { id: 8, month: "Aout" },
    { id: 9, month: "Septembre" },
    { id: 10, month: "Octobre" },
    { id: 11, month: "Novembre" },
    { id: 12, month: "Décembre" },
]

export {customers,mercantThs,produit,produitThs, day, month, orders, orderThs, transactions, costumerThs, financeThs, messages, messageThs}
