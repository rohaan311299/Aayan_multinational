const products = [
  {
    id: '1',
    name: 'General Tablets',
    image: '/images/tablets.jpeg',
    values:[
      {
      id: "1",
      name: "Atenolol 25 mg",
      packing: "10x14's",
      indicative_packing: "Blister"
      },
      {
      id: "2",
      name: "Atenolol 50 mg",
      packing: "10x14's",
      indicative_packing: "Blister"
      },
      {
      id: "3",
      name: "Atenolol 100 mg",
      packing: "10x14's",
      indicative_packing: "Blister"
      },
      {
      id: "4",
      name: "Amlodipine 2.5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "5",
      name: "Amlodipine 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "6",
      name: "Amlodipine 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "7",
      name: "Amlodipine 5 mg + Atenolol 50 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "8",
      name: "Losartan Potassium 25 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "9",
      name: "Losartan Potassium 50 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "10",
      name: "Losartan Potassium 50 mg + Amlodipine Besylate 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "11",
      name: "Losartan Potassium 50 mg + Hydrochlorothiazide 12.5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "12",
      name: "Lisinopril 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "13",
      name: "Lisinopril 5 mg + Amlodipine 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "14",
      name: "Clopidogrel Bisulphate 75 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "15",
      name: "Indapamide (SR) 1.5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "16",
      name: "Prazosin Hydrochloride (SR) 2.5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "17",
      name: "Prazosin Hydrochloride (SR) 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "18",
      name: "Dilitiazem Hydrochloride 30 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "19",
      name: "Dilitiazem Hydrochloride 60 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "20",
      name: "Dilitiazem Hydrochloride ( SR ) 90 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "21",
      name: "Benzthiazide 25 mg + Triamterene 50 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "22",
      name: "Carvedilol 3.125 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "23",
      name: "Carvedilol 6.25 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "24",
      name: "Carvedilol 12.50 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "25",
      name: "Carvedilol 25 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "26",
      name: "Iso Sorbide 5-mononitrate 5 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "27",
      name: "Iso Sorbide 5-mononitrate 10 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "28",
      name: "Iso Sorbide 5-mononitrate 30 mg SR Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "29",
      name: "Nebivolol 5 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "30",
      name: "Lisinopril 2.5 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "31",
      name: "Lisinopril 5 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "32",
      name: "Lisinopril 10 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "33",
      name: "Lisinopril 5 mg + Amlodipin 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "34",
      name: "Metoprolol Succinate 12.5 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "35",
      name: "Metoprolol Succinate 25 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "36",
      name: "Metoprolol Succinate 50 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "37",
      name: "Metoprolol Succinate 50 mg + Amlodipine 5 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "38",
      name: "Metoprolol Tartrate 25 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "39",
      name: "Metoprolol Tartrate 50 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "40",
      name: "Aceclofenac 100 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "41",
      name: "Aceclofenac 200 mg SR",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "42",
      name: "Aceclofenac 100 mg + Paracetamol 325 mg ( Coated / Uncoated )",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "43",
      name: "Aceclofenac 100 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "44",
      name: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratipeptidase 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "45",
      name: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratipeptidase 15 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "46",
      name: "Diclofenac Sodium 50 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "47",
      name: "Methyldopa 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "48",
      name: "Nimesulide 100 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "49",
      name: "Nimesulide 200 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "50",
      name: "Nimesulide 100 mg + Paracetamol 325 mg (Dispersible Also Available)",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "51",
      name: "Nimesulide 100 mg + Serratiopeptidase 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "52",
      name: "Nimesulide 100 mg + Dicyclomine HCl 20 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "53",
      name: "Paracetamol 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "54",
      name: "Paracetamol 650 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "55",
      name: "Paracetamol 325 mg + Chlorzoxazone 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "56",
      name: "Tramadol HCl 37.50 mg + Paracetamol 325 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "57",
      name: "Tramadol HCl 50 mg + Paracetamol 325 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "58",
      name: "Tramadol HCl 37.50 mg + Diclofenac Sodium 50 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "59",
      name: "Ibuprofen 400 mg+Paracetamol 325 mg+Caffeine 30 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "60",
      name: "Ibuprofen 400 mg + Paracetamol 325 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "61",
      name: "Diclofenac Sodium 50 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "62",
      name: "Diclofenac Sodium (Sustained Release) 100 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "63",
      name: "Diclofenac Sodium 50 mg + Paracetamol 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "64",
      name: "Diclofenac Free Acid 46.5 mg +Paracetamol 325 mg + Methocarbamol 400 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "65",
      name: "Diclofenac free Acid 46.5 mg + Paracetamol 325 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "66",
      name: "Serratiopeptidase 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "67",
      name: "Serratiopeptidase 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "68",
      name: "Diclofenac Sodium 50 mg + Serratiopeptidase 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "69",
      name: "Diclofenac Sodium 50 mg + Paracetamol 325 mg + Serratiopeptidase 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "70",
      name: "Diclofenac Sodium 50 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "71",
      name: "Piroxicam (Dispersible) 20 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "72",
      name: "Cetirizine Dihydrochloride 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "73",
      name: "Levocetirizine Dihydrochloride 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "74",
      name: "Levocetirizine Dihydrochloride 5 mg + Ambroxol Hydrochloride 60 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "75",
      name: "Fexofenadine Hydrochloride 120 mg",
      packing: "10x10's",
      indicative_packing: "Strip/Alu-Alu"
      },
      {
      id: "76",
      name: "Fexofenadine Hydrochloride 180 mg",
      packing: "10x10's",
      indicative_packing: "Strip/Alu-Alu"
      },
      {
      id: "77",
      name: "Loretidine 10 mg",
      packing: "10x10's",
      indicative_packing: "Strip/Alu-Alu"
      },
      {
      id: "78",
      name: "Desloratadine 5 mg",
      packing: "10X10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "79",
      name: "Acarbose 25 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "80",
      name: "Acarbose 50 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "81",
      name: "Acarbose 100 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "82",
      name: "Pioglitazone Hydrochloride 15 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "83",
      name: "Pioglitazone Hydrochloride 30 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "84",
      name: "Pioglitazone Hydrochloride 30 mg + Metformin Hydrochloride(SR ) 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "85",
      name: "Pioglitazone Hydrochloride 15 mg + Metformin Hydrochloride(SR ) 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "86",
      name: "Glimepiride 1 mg + Pioglitazone Hydrochloride 15 mg + Metformin Hydrochloride(SR) 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "87",
      name: "Glimepiride 2 mg + Pioglitazone Hydrochloride 15 mg + Metformin Hydrochloride(SR) 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "88",
      name: "Glipizide 5 mg + Metformin HCl 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "89",
      name: "Glipizide 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "90",
      name: "Glibenclamide 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "91",
      name: "Glibenclamide 5 mg + Metformin HCl 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "92",
      name: "Gliclazide 80 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "93",
      name: "Gliclazide 80 mg + Metformin HCl 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "94",
      name: "Glimepride 1 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "95",
      name: "Glimepride 2 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "96",
      name: "Glimepride 1 mg + Metformin HCl 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "97",
      name: "Glimepride 2 mg + Metformin HCl 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "98",
      name: "Glimepride 1 mg + Metformin HCl 500 mg SR",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "99",
      name: "Glimepride 2 mg + Metformin HCl 500 mg SR",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "100",
      name: "Metformin HCl 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "101",
      name: "Metformin HCl (SR) 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "102",
      name: "Metformin HCl (SR) 1000 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "103",
      name: "Voglibos 0.2 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "104",
      name: "Voglibos 0.3 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "105",
      name: "Voglibos 0.2 mg +Metformin 500 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Al-Strip"
      },
      {
      id: "106",
      name: "Voglibos 0.3 mg +Metformin 500 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Al-Strip"
      },
      {
      id: "107",
      name: "Esomeprazole magnesium Trihydrate 50 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "108",
      name: "Ranitidine HCl 150 mg",
      packing: "10x10's",
      indicative_packing: "Strip"
      },
      {
      id: "109",
      name: "Ranitidine HCl 150 mg+ Domperidone 10 mg",
      packing: "10x10's",
      indicative_packing: "Strip"
      },
      {
      id: "110",
      name: "Pantoprazole 40 mg",
      packing: "10x10's",
      indicative_packing: "Strip/Alu-Alu"
      },
      {
      id: "111",
      name: "Pantoprazole 40 mg + Domperidone 10 mg",
      packing: "10x10's",
      indicative_packing: "Strip/Alu-Alu"
      },
      {
      id: "112",
      name: "Rabeprazole 20 mg",
      packing: "10x10's",
      indicative_packing: "Strip/Alu-Alu"
      },
      {
      id: "113",
      name: "Rabeprazole 20 mg + Domperidone 10 mg",
      packing: "10x10's",
      indicative_packing: "Strip/Alu-Alu"
      },
      {
      id: "114",
      name: "Dried Aluminium hydroxide Gel 300 mg + Magnesium Aluminium Silicate Hydrate 50 mg + Magnesium Hydroxide 25 mg + Activated Dimethicone 25 mg",
      packing: "",
      indicative_packing: "Blister"
      },
      {
      id: "115",
      name: "Dried Aluminium hydroxide Gel 240 mg + Light Magnesium Carbonate 60 mg + Magnesium Hydroxide 100 mg + Activated Dimethicone 25 mg",
      packing: "",
      indicative_packing: "Blister"
      },
      {
      id: "116",
      name: "Cinnarizine 25 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "117",
      name: "Cinnarizine 75 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "118",
      name: "Cinnarizine 25 mg + Domperidone 15 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "119",
      name: "Ondansetron HCl 4 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "120",
      name: "Ondansetron HCl 8 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "121",
      name: "Domperidone 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "122",
      name: "Atoravastatin 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "123",
      name: "Atoravastatin 20 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "124",
      name: "Atoravastatin 40 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "125",
      name: "Atoravastatin 10 mg + Ezetimibe 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "126",
      name: "Atoravastatin 10 mg + Fenofibrate 160 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "127",
      name: "Fenofibrate 200 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "128",
      name: "Telmisartan 20 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "129",
      name: "Telmisartan 40 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "130",
      name: "Telmisartan 80 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "131",
      name: "Telmisartan 40 mg + Hydrochlorothiazide 12.5 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "132",
      name: "Rosuvastatin 5 mg / 10 mg / 20 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "133",
      name: "Simvastatin 10 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "134",
      name: "Simvastatin 20 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "135",
      name: "Olmesatran Medoxomil 20 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "136",
      name: "Olmesatran Medoxomil 40 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "137",
      name: "Olmesatran Medoxomil 80 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "138",
      name: "Olmesatran Medoxomil 40 mg + Hydrochlorothiazide 12.5 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "139",
      name: "Albendazole (Chewable) 400 mg",
      packing: "1x1's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "140",
      name: "Albendazole (Chewable) 200 mg",
      packing: "1x1's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "141",
      name: "Albendazole (Coated ) 200 mg",
      packing: "1x1's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "142",
      name: "Cetirizine DiHydrochloride 5 mg + Paracetamol 325 mg + Phenylepherine Hydrochloride 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "143",
      name: "Paracetamol 325 mg + Phenylephrine HCl 5 mg + Bromhexine HCl 8 mg + Guaiphenesin 100 mg + Chlorpheniramine Maleate 2 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "144",
      name: "Phenylephrine HCl 2.5 mg + Bromhexine HCl 8 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "145",
      name: "Dextromethorphan HCl 10 mg + Guaiphenesin 100 mg + Bromheine HCl 8 mg + Chlopheniramine Maleate 2 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "146",
      name: "Dextromethorphan HCl 10 mg + Bromheine HCl 8 mg + Chlopheniramine Maleate 2 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "147",
      name: "Paracetamol 325 mg + Phenylephrine HCl 5 mg + Chlorpheniramine Maleate 2 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "148",
      name: "Paracetamol 325 mg + Phenylephrine HCl 5 mg + Caffeine 25 mg + Chlorpheniramine Maleate 2 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "149",
      name: "Lithium Carbonate 300 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "150",
      name: "Montelucast Sodium 5 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "151",
      name: "Montelucast Sodium 10 mg + Fexofenadine 120 mg Tab",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "152",
      name: "Montelucast Sodium 10 mg + Levocetirizine 5 mg Tab",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "153",
      name: "Betahistine 8 mg 16 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "154",
      name: "Levotiracetam 250 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "155",
      name: "Levotiracetam 500 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "156",
      name: "Terbinafin Tablet 250 mg / 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "157",
      name: "Ciprofloxacin 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "158",
      name: "Ciprofloxacin 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "159",
      name: "Ciprofloxacin 500 mg + Tinidazole 600 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "160",
      name: "Levofloxacin 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "161",
      name: "Levofloxacin 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "162",
      name: "Levofloxacin 250 mg + Ornidazole 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "163",
      name: "Clarithromycin 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "164",
      name: "Clarithromycin 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "165",
      name: "Clotrimazole (Vaginal) 100 mg",
      packing: "10x10's",
      indicative_packing: "Strip"
      },
      {
      id: "166",
      name: "Ofloxacin 100 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "167",
      name: "Ofloxacin 200 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "168",
      name: "Ofloxacin 400 mg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "169",
      name: "Ofloxacin 200 mg + Ornidazole 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "170",
      name: "Ofloxacin 200 mg + Tinidazole 600 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "171",
      name: "Roxithromycin (Dispersible) 50 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "172",
      name: "Roxithromycin 150 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "173",
      name: "Azithromycin (Dispersible) 100 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "174",
      name: "Azithromycin 250 mg",
      packing: "1x6's",
      indicative_packing: "Blister"
      },
      {
      id: "175",
      name: "Azithromycin 500 mg",
      packing: "1x3's",
      indicative_packing: "Blister"
      },
      {
      id: "176",
      name: "Sulphamethoxazole 800 mg + Trimethoprim 160 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "177",
      name: "Sparfloxacin 200 mg Tablet",
      packing: "10x6's",
      indicative_packing: "Blister"
      },
      {
      id: "178",
      name: "Fluconazole 150 mg",
      packing: "1x1's",
      indicative_packing: "Blister"
      },
      {
      id: "179",
      name: "Etamsylate 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "180",
      name: "Etamsylate 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "181",
      name: "Loperamide HCl 2 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "182",
      name: "Linezolid 600 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Strip"
      },
      {
      id: "183",
      name: "Moxifloxacin 400 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "184",
      name: "Piracetam 400 mg / 800 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "185",
      name: "Torsemide 10 mg / 20 mg / 40 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "186",
      name: "Levosulprid 25 mg / 50 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "187",
      name: "Etoricoxib 60 mg / 90 mg / 120 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "188",
      name: "Etoricoxib 60 mg + Thiocolchicoside 4 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "189",
      name: "Flunerazine 5 mg / 10 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "190",
      name: "Levosulpride 25 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "191",
      name: "Levetiracetam 250 mg /500 mg / 1000 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "192",
      name: "Ursodeoxycholic Acid 150 mg / 300 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "193",
      name: "Cyproheptadine 4 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "194",
      name: "Salbutamol Sulphate 2 mg / 4 mg Tab",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "195",
      name: "Febuxostat 40 mg / 80 mg Tablet",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "196",
      name: "Ferrous Ascorbate 100 mg + Folic Acid 1500 mcg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "197",
      name: "Citicolin Sodium 500 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "198",
      name: "Citicolin Sodium 500 mg + Piracetam 800 mg Tab",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "199",
      name: "Vitamin B1 1 mg + Vitamine B2 1 mg + Vitamin B6 0.5 mg + Niacinamide 15 mg + Vitamin B12 1 mcg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "200",
      name: "Vitamin B1 10 mg + Vitamine B2 10 mg + Vitamin B6 5 mg + Niacinamide 45 mg + Vitamin B12 15 mcg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "201",
      name: "Cal. Carbonate 1250 mg + Vitamin D3 250 I.U.",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "202",
      name: "Cal. Carbonate 1250 mg + Alfacalcidol 0.25 mcg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "203",
      name: "Doxylamine Succinate 10 mg + Pyridoxine HCl 10 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "204",
      name: "Folic Acid 5 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "205",
      name: "Calcium Carbonate (eqv. To elemental Calcium ) 500 mg",
      packing: "10X10's",
      indicative_packing: "Blister"
      },
      {
      id: "206",
      name: "Calcium Citrate 1190 mg+Zinc Sulph. Mono 4 mg+ Magnesium Hydroxide 100 mg +Calcitriol 0.25 mcg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "207",
      name: "Calcium Citrate 1190 mg+Zinc Sulph. Mono 4 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "208",
      name: "Methylcobalamin 500 mcg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "209",
      name: "Methylcobalamin 750 mcg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "210",
      name: "Methylcobalamin 1500 mcg",
      packing: "10x10's",
      indicative_packing: "Blister/Alu-Alu"
      },
      {
      id: "211",
      name: "Glucosamin Sulphate 500 mg Tablet",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "212",
      name: "Trimetazidine hydrochloride 35 mg Tab",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "213",
      name: "Mefenamic acid 500 mg + Paracetamol 325 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "214",
      name: "Mefenamic acid 250 mg + Tranexamic Acid 500 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "215",
      name: "Magaldrate 540 mg + Dicyclomine HCl 20 mg + Oxetacaine 5 mg + Simeticone 25 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "216",
      name: "Magaldrate 400 mg + Dicyclomine HCl 10 mg + Oxetacaine 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "217",
      name: "Dicyclomine HCl 10 mg + Mefenamic acid 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "218",
      name: "Dicyclomine HCl 20 mg + Paracetamol 325 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "219",
      name: "Mefenamic Acid 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "220",
      name: "Mefenamic Acid 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "221",
      name: "Hyoscine Butyl Bromide 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "222",
      name: "Drotaverine Hydrochloride 40 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "223",
      name: "Drotaverine Hydrochloride 80 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "224",
      name: "Drotaverine Hydrochloride 80 mg+ Mefenamic Acid 250 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "225",
      name: "Deflazacort 6 mg / 12 mg",
      packing: "10x10's",
      indicative_packing: "Alu-Alu"
      },
      {
      id: "226",
      name: "Fungal Diastase (1:800) 100 mg + Pepsin 60 mg + Activated Charcoal 75 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "227",
      name: "Cyproheptadine HCl 4 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "228",
      name: "Ethambutol HCl 800 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "229",
      name: "Pyrazinamide 750 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "230",
      name: "Sildenafil citrate 50 mg",
      packing: "1x4's",
      indicative_packing: "Blister"
      },
      {
      id: "231",
      name: "Sildenafil citrate 100 mg",
      packing: "1x4's",
      indicative_packing: "Blister"
      },
      {
      id: "232",
      name: "Methylergometrine Maleate 0.125 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "233",
      name: "Dexamethaxone 4 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "234",
      name: "Dexamethaxone 8 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "235",
      name: "Bisacodyl 5 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
      {
      id: "236",
      name: "Bisacodyl 10 mg",
      packing: "10x10's",
      indicative_packing: "Blister"
      },
    ]
  },
  {
    id: '2',
    image:"./images/tablets.jpeg",
    name: 'Cephalosprin tablets',
    values:[
      {
        id:1,
        name:"Cephalexin (Dispersible) 125 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:2,
        name:"Cephalexin (Dispersible) 250 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:3,
        name:"Cefixime (Dispersible) 50 mg",
        packing:"10x10's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:4,
        name:"Cefixime (Dispersible) 100 mg",
        packing:"10x10's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:5,
        name:"Cefixime 200 mg",
        packing:"10x10's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:6,
        name:"Cefadroxil (Dispersible) 125 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:7,
        name:"Cefadroxil (Dispersible) 250 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:8,
        name:"Cefadroxil 500 mg",
        packing:"10x10's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:9,
        name:"Cepodoxime Proxetil (Dispersible) 50 mg",
        packing:"10x10's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:10,
        name:"Cepodoxime Proxetil (Dispersible) 100 mg",
        packing:"10x10's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:11,
        name:"Cepodoxime Proxetil 200 mg",
        packing:"10x10's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:12,
        name:"Cefuroxime Axetil 250 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:13,
        name:"Cefuroxime Axetil 500 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:14,
        name:"Cefixim-200 mg + Ofloxacin 200 mg Tablet",
        packing:"10x10's",
        indicative_packing:"Alu-Alu"
      }
    ]
  },
  {
    id: '3',
    name: 'Beta Lactum Tablets',
    image: '/images/tablets.jpeg',
    values:[
      {
        id:1,
        name:"Amoxicillin (Dispersible) 125 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:2,
        name:"Cefadroxil 500 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:3,
        name:"Ampicillin (Dispersible) 125 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:4,
        name:"Ampicillin (Dispersible) 250 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:5,
        name:"Ampicillin 125 mg + Dicloxacillin (Dispersible) 125 mg",
        packing:"10x10's",
        indicative_packing:"Strip"
      },
      {
        id:6,
        name:"Amoxycillin Trihydrate 250MG+ Clavunic Acid125MG",
        packing:"10x6's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:7,
        name:"Amoxycillin Trihydrate 500MG+ Clavunic Acid125MG",
        packing:"10x6's",
        indicative_packing:"Strip/Alu-Alu"
      },
      {
        id:8,
        name:"Amoxycillin Trihydrate 875MG+ Clavunic Acid125MG",
        packing:"10x6's",
        indicative_packing:"Strip/Alu-Alu"
      },
    ]
  },
  {
    id: '4',
    name: 'Liquid Oral',
    image: '/images/tablets.jpeg',
    values:[
      {
      id: "1",
      name: "Paracetamol 100 mg / 5ml",
      packing: "60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "2",
      name: "Paracetamol 200 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "3",
      name: "Paracetamol 250 mg / 5ml",
      packing: "60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "4",
      name: "Paracetamol 250 mg + Domperidone 5 mg/ 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "5",
      name: "Ibuprofen 100 mg + Paracetamol 162.5 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "6",
      name: "Dicyclomine Hydrochloride 10 mg + Activated Dimethicone 40 mg / 5 ml",
      packing: "30 ml",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "7",
      name: "Mefenamic Acid 50 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "8",
      name: "Paracetamol 125 mg + Mefenamic Acid 50 mg / 5 ml",
      packing: "60 ml",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "9",
      name: "Di-sodium Hydrogen Citrate 1.25 gm/ 5 ml",
      packing: "100 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "10",
      name: "Paracetamol 125 mg + Promethazine HCl 5 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "11",
      name: "Cetirizine Dihydrochloride 1 mg + Paracetamol 125 mg + Phenyl Epherine HCl 2.5 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "12",
      name: "Paracetamol 125 mg + Phenylephrine Hydrochloride 2.5 mg + Desloratadine 0.5 mg + Zinc gluconate 5 mg + Ambroxol HCl 7.5 mg / 5 ml",
      packing: "60/ 100 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "13",
      name: "Paracetamol 250 mg + Phenylephrine Hydrochloride 5 mg + Desloratadine 1.25 mg + Zinc gluconate 10 mg + Ambroxol HCl 15 mg / 5 ml",
      packing: "60/ 100 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "14",
      name: "Phenylepherine HCl 2.5 mg + Chlorpheniramine Maleate 2 mg + Paracetamol 100 mg / ml",
      packing: "60/ 100 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "15",
      name: "Ambroxol HCl 30 mg/ 5 ml",
      packing: "30 ML/ 60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "16",
      name: "Ambroxol HCl 15 mg + Terbutaline Sulphate 1.25 mg / 5ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "17",
      name: "Diphenhydramine HCl 14.08 + Ammonium Chloride 138 mg + Sodium Citrate57.03 mg + Menthol 1.14 mg / 5 ml",
      packing: "50 / 100 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "18",
      name: "Diphenhydramine HCl 12.5 mg + Ammonium Chloride 130 mg + Sodium Citrate 60 mg + Citric Acid 40 mg + Menthol 0.9 mg / 5 ml",
      packing: "50 / 100 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "19",
      name: "Chlorpheniramine Maleate 2.5 mg + Ammonium Chloride 125 mg + Sodium Citrate 55 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "20",
      name: "Dextromethorphan Hydrobromide 5 mg + Chlorpheniramine Maleate 2.5 mg + Guaiphenesin 50 mg + Ammonium Chloride 60 mg / 5 ml",
      packing: "60/ 100 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "21",
      name: "Terbutaline Sulphate 2.5 mg + Bromhexine HCl 8 mg / 5ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "22",
      name: "Terbutaline Sulphate 1.5 mg + Bromhexine HCl 4 mg / 5ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "23",
      name: "Bromhexine Hydrochloride 4 mg + Dextromethorphen Hydrochloride 5 mg + Amm. Chloride 50 mg + Menthol 2.5 mg",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "24",
      name: "Bromhexine Hydrochloride 4 mg + Dextromethorphen Hydrochloride 5 mg + Phenylepherine hydrochloride 5 mg + Menthol 0.75 mg / 5 ml.",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "25",
      name: "Terbutaline Sulphate 1.25 mg + Bromhexine Hydrochloride 4 mg + Guaiphenesin 50 mg + Menthol 2.5 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "26",
      name: "Terbutaline Sulphate 1.25 mg + Bromhexine Hydrochloride 5 mg + Guaiphenesin 100 mg + Menthol 1 mg / 10 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "27",
      name: "Cetirizine HCl 2.5 mg + Dextromethorphan HBr 5 mg + Phenylephephrine HCl 2.5 mg",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "28",
      name: "Dextromethorphan HBr 10 mg + Phenylepherine HCl 5 mg + Chlorpheniramine Maleate 2 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "29",
      name: "Phenylepherine HCl 2.5 mg + Chlorpheniramine Maleate 1 mg / ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "30",
      name: "Levocetirizine Dihydrochloride 2.5 mg + Ambroxol HCl 30 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "31",
      name: "Dextromethorphan HBr 10 mg + Chlorpheniramine Maleate 2.5 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "32",
      name: "Bromhexine hydrochloride 4 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "33",
      name: "Chlorpheniramine Maleate 2.5 mg + Noscopine 15 mg + Sodium Citrate 60 mg + Guaiphenesin 100 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "34",
      name: "Salbutamol Sulphate 2 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring cap"
      },
      {
      id: "35",
      name: "Azithromycin 100 mg/ 5 ml",
      packing: "15 ML",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "36",
      name: "Azithromycin 200 mg/ 5 ml",
      packing: "15 ML",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "37",
      name: "Ciprofloxacin 250 mg / 5 ml",
      packing: "30/ 60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "38",
      name: "Ofloxacin 50 mg / 5 ml",
      packing: "30 / 60 ML",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "39",
      name: "Erythromycin Estolate 100 mg/ 5 ml",
      packing: "60 ML",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "40",
      name: "Sulphamethoxazole 200 mg + Trimethoprim 40 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "41",
      name: "Chloramphenicol (As Palmitate) 125 mg / 5 ml",
      packing: "60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "42",
      name: "Ofloxacin 50 mg + Metronidazole Benzoate120 mg + Simethicone 10 mg / 5 ml",
      packing: "30 / 60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "43",
      name: "Ofloxacin 50 mg + Tinidazole 150 mg / 5 ml",
      packing: "30 / 60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "44",
      name: "Ofloxacin 50 mg + Ornidazole 125 mg / 5 ml",
      packing: "30 / 60 ML",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "45",
      name: "Norfloxacin 125 mg + Metronidazole Benzoate 120 mg + Simethicone 10 mg",
      packing: "30 / 60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "46",
      name: "Chloramphenicol (As Palmitate) 125 mg / 5 ml",
      packing: "",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "47",
      name: "Roxithromycin 50 mg / 5 ml",
      packing: "30 / 60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "48",
      name: "Levocetirizine Dihydrochloride 2.5 mg / 5 ml",
      packing: "30 / 60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "49",
      name: "Cetirizine Dihydrochloride 5 mg / 5 ml",
      packing: "30 / 60 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "50",
      name: "Promethazine Hydrochloride 5 mg/ 5ml",
      packing: "60 / 100 ML",
      indicative_packing: "With Measuring Cap"
      },
      {
      id: "51",
      name: "Montelucast 4 mg + Levocetirizine HCl 2.5 mg / 5ml",
      packing: "30 ml",
      indicative_packing: "with CTN & Measuring cap"
      },
      {
      id: "52",
      name: "Ondansetron 2 mg / 5 ml",
      packing: "30 ML",
      indicative_packing: "With CTN & Dropper"
      },
      {
      id: "53",
      name: "Domperidone 1 mg / ml",
      packing: "30 ML",
      indicative_packing: "With CTN & Dropper"
      },
      {
      id: "54",
      name: "Activated Dimethicone 5m mg + Magnesium hydroxide 250 mg + Dried Aluminium Hydroxide Gel 250 mg / 5 ml",
      packing: "170 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "55",
      name: "Activated Dimethicone 5m mg + Magnesium hydroxide 250 mg + Dried Aluminium Hydroxide Gel 250 mg / 10 ml",
      packing: "170 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "56",
      name: "Oxetacaine 10 mg + Aluminium Hydroxide 291 mg + Magnesium Hydroxide 98 mg / 5 ml",
      packing: "170 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "57",
      name: "Dried Aluminium Hydroxide Gel 830 mg + Magnesium Hydroxide 185 mg + Activated Dimethicone 50 mg / 5 ml",
      packing: "170 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "58",
      name: "Dried Aluminium Hydroxide Gel 300 mg + Magnesium Hydroxide 100 mg + Activated Dimethicone 40 mg / 5 ml",
      packing: "170 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "59",
      name: "Magaldrate 480 mg + activated Dimethicone 50 mg / 5 ml",
      packing: "170 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "60",
      name: "Sucralfate 1.0 gm / 10 ml",
      packing: "100 / 200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "61",
      name: "Potassium Citrate 1100 mg + Citric Acid 334 mg / 5 ml",
      packing: "",
      indicative_packing: "With Carton"
      },
      {
      id: "62",
      name: "Cyproheptadine Hydrochloride 2mg / 5 ml",
      packing: "200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "63",
      name: "Alpha Amylase (1:2000) 20 mg + Pepsin (1: 3000) 10 mg / 5 ml",
      packing: "200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "64",
      name: "Fungal Diastase (1:1200) 50 mg + Pepsin (1: 3000) 10 mg",
      packing: "200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "65",
      name: "Fungal Diastase (1:1200) 50 mg + Pepsin (1:3000) 10 mg / 5 ml",
      packing: "200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "66",
      name: "Tricholine Citrate 0.55 gm + Sorbitol Solution (70%) 7.15 gm / 10 ml",
      packing: "200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "67",
      name: "Cyproheptadine HCl 2 mg + Tricholine Citrate 275 mg",
      packing: "200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "68",
      name: "Liquid Paraffin 3.75 mg + Milk of Magnesia 11.25 mg / 15 ml",
      packing: "170 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "69",
      name: "Lactulose solution 10 gm / 15 ml",
      packing: "100 / 200 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "70",
      name: "Rifampicin 100 mg / 5 ml",
      packing: "60 /100 ml",
      indicative_packing: "Without Carton"
      },
      {
      id: "71",
      name: "Albendazole 200 mg / 5 ml",
      packing: "10 ml",
      indicative_packing: "With Carton"
      },
      {
      id: "72",
      name: "Betamethasone Sodium Phosphate 0.5 mg / 5 ml",
      packing: "30 ml",
      indicative_packing: "With Carton"
      },
    ]
  },
  {
    id:'5',
    name:"Multivitamin/Iron/Mineral Suppliments Liquid Orals",
    image: '/images/tablets.jpeg',
    values:[
      {
        id:1,
        name: "Calcium Gluconate 50 mg + Cholecalciferol 400 I.U. + Cyanocobalamin 5 mcg / 5ml",
        packing: "200 ml",
        indicative_packing: "With Carton"
        },
        {
        id: 2,
        name: "Calcium Carbonate 250 mg + Cholecalciferol 125 I.U. / 5 ml",
        packing: "200 ml",
        indicative_packing: "With Carton"
        },
        {
        id:3,
        name: "Protein Hydrolysate 20% 1 mg + Iron Choline Citrate 100 mg + Vitamin B6 2 mg + Vitamin B12 10 mcg + Folic Acid 1 mg / 15 ml",
        packing: "200 ml",
        indicative_packing: "With Carton"
        },
        {
        id: 4,
        name: "Ferric Ammonium Citrate 150 mg + Vitamin B12 7.5 mcg + Folic Acid 500 mcg + L-Lysine mono HCl 12 mg + Zinc Sulphate 22 mg + Copper sulphate 2 mg + Manganese Sulphate 2 mg / 5 ml",
        packing: "200 ml",
        indicative_packing: "With Carton"
        },
        {
        id: 5,
        name: "Ferric Ammonium Citrate 25 mg + L-Lysine Mono HCl 50 mg + Cyanocobalamin 5 mcg + Folic Acid 200 mcg / ml",
        packing: "200 ml",
        indicative_packing: "With Carton"
        },
        {
        id: 6,
        name: "Ferrous Gluconate + Folic Acid + Calcium Lactate + Cyanocobalamin",
        packing: "200 ml",
        indicative_packing: "With Carton"
        }
    ]
  },
  {
    id:"6",
    name:"General Capsules",
    image: '/images/tablets.jpeg',
    values:[
       {
          id: 1,
          name: "Tramadol Hydrochloride  50 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 2,
          name: "Tramadol Hydrochloride 100 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 3,
          name: "",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 4,
          name: "Piroxicam 20 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 5,
          name: "Omeprazole 20 mg",
          packing: "10x15's",
          indicative_packing: "Al-Strip"
        },
        {
          id: 6,
          name: "Omeprazole 40 mg",
          packing: "10x15's",
          indicative_packing: "Al-Strip"
        },
        {
          id: 7,
          name: "Omeprazole 20 mg + Domperidone 10 mg",
          packing: "10x15's",
          indicative_packing: "Al-Strip"
        },
        {
          id: 8,
          name: "Lansoprazole 30 mg",
          packing: "10x10's",
          indicative_packing: "Al-Strip / Blister"
        },
        {
          id: 9,
          name: "Rabeprazole (enteric coated)  20 mg +  Domperidone as sustain Release 30 mg",
          packing: "10x10's",
          indicative_packing: "Blister / Alu-Alu"
        },
        {
          id: 10,
          name: "Pantoprazole (enteric coated)  20 mg + Domperidon SR 30 mg",
          packing: "10x10's",
          indicative_packing: "Blister / Alu-Alu"
        },
        {
          id: 11,
          name: "Rabeprazole (enteric coated)  20 mg +  Levosulpride as sustain Release 75 mg",
          packing: "10x1x10's",
          indicative_packing: "Alu-Alu"
        },
        {
          id: 12,
          name: "Pantoprazole (enteric coated)  20 mg + Levosulpride as sustained Release pellets 75 mg",
          packing: "",
          indicative_packing: "Alu-Alu"
        },
        {
          id: 13,
          name: "Chloramphenicol 250 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 14,
          name: "Chloramphenicol 500 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 15,
          name: "Fluconazole 150 mg Capsule",
          packing: "1x1's",
          indicative_packing: "Blister"
        },
        {
          id: 16,
          name: "Loperamide Hydrochloride 2 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 17,
          name: "Tetracycline Hydrochloride 250 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 18,
          name: "Tetracycline Hydrochloride 500 mg",
          packing: "10x10's",
          indicative_packing: "Blister"
        },
        {
          id: 19,
          name: "Gabapentin 300 mg",
          packing: "10x10's",
          indicative_packing: "Blister / Alu-Alu"
        },
        {
          id: 20,
          name: "Pregabalin 75 mg",
          packing: "10x10's",
          indicative_packing: "Blister / Alu-Alu"
        },
        {
          id: 21,
          name: "Pregabalin 75 mg + Mecobalamin 750 mg",
          packing: "10x10's",
          indicative_packing: "Blister / Alu-Alu"
        },
        {
          id: 22,
          name: "Pepsin 10 mg  + Fungal Diastase 18.75 mg",
          packing: "10x10's",
          indicative_packing: "Al-Strip"
        },
        {
          id: 23,
          name: "Tamsulosin hydrochloride modified Release  400 mcg",
          packing: "20x10's",
          indicative_packing: "Blister"
        },
        {
          id: 24,
          name: "Methycobalamin 1500mcg+Alpha Lipoic Acid 100mg+ Folic Acid 1.5mg+vitamin B6 3mg",
          packing: "10x10's",
          indicative_packing: "Blister / Alu-Alu"
        }
    ]
  },
  {
    id:"7",
    name:"Beta Lactum Capsules",
    image: '/images/tablets.jpeg',
    values:[
      {
        id:1,
        name: "Amoxycillin 250 mg",
        packing: "10x10's",
        indicative_packing: "Blister"
      },
      {
        id:2,
        name: "Amoxycillin 500 mg",
        packing: "10x10's",
        indicative_packing: "Blister"
      },
      {
        id:3,
        name: "Ampicillin 250 mg",
        packing: "10x10's",
        indicative_packing: "Blister"
      },
      {
        id:4,
        name: "Ampicillin 500 mg",
        packing: "10x10's",
        indicative_packing: "Blister"
      },
      {
        id:5,
        name: "Amoxycillin 250 mg + Lactic Acid Bacillus 60 MS",
        packing: "10x10's",
        indicative_packing: "Blister/ALU-ALU"
      },
      {
        id:6,
        name: "Amoxycillin 500 mg + Lactic Acid Bacillus 60 MS",
        packing: "10x10's",
        indicative_packing: "Blister/ALU-ALU"
      },
      {
        id:7,
        name: "Ampicillin 500 mg",
        packing: "10x10's",
        indicative_packing: "Blister/ALU-ALU"
      }
    ]
  },
  {
    id:"8",
    name:"Cephalosporin Capsules",
    image: '/images/tablets.jpeg',
    values:[
      {
        id:1,
        name: "Cephalexin 250 mg",
        packing: "10x10's",
        indicative_packing: "Blister"
      },
      {
        id:2,
        name: "Cephalexin 500 mg",
        packing: "10x10's",
        indicative_packing: "Blister"
      }
    ]
  },
  {
    id:"9",
    name:"General Ointments",
    image:"/images/tablets.jpeg",
    values:[
      {
        id: "1",
        name: "Diclofenac Diethytlamine 1.16% w/v"
      },
      {
        id: "2",
        name: "Piroxicam 0.5% w/w"
      },
      {
        id: "3",
        name: "Linseed Oil  3% w/v + Diclofenac Diethytlamine 1.16% w/v + Methy salicylate 10% w/v + menthol 5% w/v"
      },
      {
        id: "4",
        name: "Fluocinolone Acetonide 0.025%  w/w + Clotrimazole  1% w/w + Neomycin Sulphate 0.5% w/w"
      },
      {
        id: "5",
        name: "Beclomethasone Dipropionate 0.025% w/w + Neomycin Sulphate 1% w/w +  Clotrimazole 1% w/w"
      },
      {
        id: "6",
        name: "Beclomethasone Dipropionate 0.025% w/w + Neomycin Sulphate 0.5% w/w"
      },
      {
        id: "7",
        name: "Beclomethasone Dipropionate 0.025% w/w + Clotrimazole 1% w/w"
      },
      {
        id: "8",
        name: "Beclomethasone Dipropionate 0.025% w/w + Phenylepherine Hydrocloride 0.1 % w/w  + Lignocain Hydrocloride 2.50% w/w"
      },
      {
        id: "9",
        name: "Beclomethasone Dipropionate 0.025% w/w"
      },
      {
        id: "10",
        name: "Beclomethasone Dipropionate 0.025% w/w + Clioquinol 3.0% w/w"
      },
      {
        id: "11",
        name: "Beclomethasone Dipropionate 0.025% w/w + Clotrimazole 1% w/w + Neomycin Sulphate 0.1% w/w"
      },
      {
        id: "12",
        name: "Beclomethasone Dipropionate 0.025% w/w + Neomycin Sulphate 0.1% w/w+ Miconazole Nitrate 2% w/w"
      },
      {
        id: "13",
        name: "Clobetasol Propionate 0.05% w/w"
      },
      {
        id: "14",
        name: "Clobetasol Propionate 0.05% w/w + Neomycin Sulphate 0.2% w/w+ Miconazole Nitrate 2.0 % w/w"
      },
      {
        id: "15",
        name: "Clobetasol Propionate 0.05% w/w + Salicylic Acid 3% w/w"
      },
      {
        id: "16",
        name: "Clotirmazole 1 % w/w"
      },
      {
        id: "17",
        name: "Fusidic Acid 0.20% w/w +  Beclomethasone Dipropionate 0.1% w/w"
      },
      {
        id: "18",
        name: "Beclomethasone Dipropionate 0.025% w/w + Salicylic  Acid 3% w/w"
      },
      {
        id: "19",
        name: "Miconazole Nitrate 2% w/w+ Fluocinolone Acetonide 0.01% w/v"
      },
      {
        id: "20",
        name: "Miconazole Nitrate 2% w/w "
      },
      {
        id: "21",
        name: "Neomycin Sulphate 0.5% w/w + Chlorocresol 0.1% w/w"
      },
      {
        id: "22",
        name: "Clarithromycin 1% w/w "
      },
      {
        id: "23",
        name: "Sodium Fusidate 20 mg/ gm"
      },
      {
        id: "24",
        name: "Clotrimazole 1% w/w + Menthol 1% w/w + Boric Acid 1% w/w + Zinc Oxide 5% w/w"
      },
      {
        id: "25",
        name: "Fusidic Acid 0.20% w/w "
      },
      {
        id: "26",
        name: "Mupirocin 2% w/w"
      },
      {
        id: "27",
        name: "Fluticasone Propionate 0.05% w/w + Imidurea 0.02% w/w"
      },
      {
        id: "28",
        name: "Mometasone Furoate 1 mg/ gm"
      },
      {
        id: "29",
        name: "Aminacrine Hydrochloride 1 gm + Cetrimide 0.5 mg / 100 gm"
      },
      {
        id: "30",
        name: "Neomycin Sulphate 3400 I.U.  + Polymyxin B Sulphate 5000 I.U. + Bacitracin Zinc 400 I.U."
      },
      {
        id: "31",
        name: "Clindamycin Phosphate 1.0% w/w"
      },
      {
        id: "32",
        name: "Ofloxacin 0.75%+Ornidazole 2%+ Clobetasol 0.0515%+ Terbinafin 1% Ointment"
      }
    ]
  },
  {
    id:"10",
    name:"Lotions/ Mouthwash",
    image:"/images/tablets.jpeg",
    values:[
      {
        id:1,
        name:"Silver sulfadiazine 1.0% w/w"
      },
      {
        id:2,
        name:"Silver Sulfadiazine 1.0% w/w + Chlorhexidine Gluconate 0.6%"
      },
      {
        id:3,
        name:"Povidone Iodine 5% w/v"
      },
      {
        id:4,
        name:"Povidone Iodine 7.5 % w/v"
      },
      {
        id:5,
        name:"Choline Salicylate 8.7% + Lignocain Hydrochloride 2.0 % w/w + Benzoalkonium Hydrochloride 0.01% w/w"
      },
      {
        id:6,
        name:"Calamine 8.0 % w/v"
      },
      {
        id:7,
        name:"Calamine 8.0% + Diphenhydramine Hydrochloride 1.0% w/v + Camphor 0.1% w/v"
      },
      {
        id:8,
        name:"Gamma Benzene Hexachloride  1.0 % w/v + Cetrimide 0.1% w/v"
      },
      {
        id:9,
        name:"Chlorhexidine Gluconate 0.2% w/v"
      },
      {
        id:10,
        name:"Chlorhexidine Gluconate 0.3% w/v  + Cetirmide 0.6% w/v"
      },
      {
        id:11,
        name:"Permethrin 5% Lotion"
      },
      {
        id:12,
        name:"Salicylic Acid 1% + Clobetasol 0.025%"
      },
      {
        id:13,
        name:"Clotrimazole 1% + Beclomethasone Dipropionate 0.025% Lotion"
      },
      {
        id:14,
        name:"Ketoconazole 2 % w/v"
      },
    ]
  },
  {
    id:"11",
    name:"Cephalosporing dry injections",
    image:"/images/tablets.jpeg",
    values:[
      {
        id: "1",
        name: "Cefepime Injection 1gm",
        packing: "Glass Vial"
      },
      {
        id: "2",
        name: "Ceftriaxone Sodium 125 mg",
        packing: "Glass Vial"
      },
      {
        id: "3",
        name: "Ceftriaxone Sodium 250 mg",
        packing: "Glass Vial"
      },
      {
        id: "4",
        name: "Ceftriaxone Sodium 500 mg",
        packing: "Glass Vial"
      },
      {
        id: "5",
        name: "Ceftriaxone Sodium 1000 mg",
        packing: "Glass Vial"
      },
      {
        id: "6",
        name: "Ceftriaxone Sodium 2000 mg",
        packing: "Glass Vial"
      },
      {
        id: "7",
        name: "Ceftazidime Pentahydrate 1000 mg",
        packing: "Glass Vial"
      },
      {
        id: "8",
        name: "Cefotaxime Sodium 250 mg",
        packing: "Glass Vial"
      },
      {
        id: "9",
        name: "Cefotaxime Sodium 500 mg",
        packing: "Glass Vial"
      },
      {
        id: "10",
        name: "Cefotaxime Sodium 1000 mg",
        packing: "Glass Vial"
      },
      {
        id: "11",
        name: "Sulbactam Sodium 500 mg + Cefoperazone Sodium 500 mg",
        packing: "Glass Vial"
      },
      {
        id: "12",
        name: "Sulbactam Sodium 500 mg + Cefoperazone Sodium 1000 mg",
        packing: "Glass Vial"
      },
      {
        id: "13",
        name: "Ceftriaxone Sodium 250 mg + Tazobactum 31.25",
        packing: "Glass Vial"
      },
      {
        id: "14",
        name: "Ceftriaxone Sodium 1000 mg  + Tazobactum 125 mg",
        packing: "Glass Vial"
      },
      {
        id: "15",
        name: "Ceftriaxone Sodium 1000 mg + Tazobactum 500 mg",
        packing: "Glass Vial"
      },
      {
        id: "16",
        name: "Ceftriaxone Sodium 250 mg + Sulbactum 125 mg",
        packing: "Glass Vial"
      },
      {
        id: "17",
        name: "Ceftriaxone Sodium 500 mg + Sulbactum 250 mg",
        packing: "Glass Vial"
      },
      {
        id: "18",
        name: "Ceftriaxone Sodium 1000 mg + Sulbactum 500 mg",
        packing: "Glass Vial"
      },
      {
        id: "19",
        name: "Cefotaxime Sodium 500 mg + Sulbactum 250 mg",
        packing: "Glass Vial"
      },
      {
        id: "20",
        name: "Cefotaxime Sodium 1000 mg + Sulbactum 500 mg",
        packing: "Glass Vial"
      },
      {
        id: "21",
        name: "Meropenam 250 mg",
        packing: "Glass Vial"
      },
      {
        id: "22",
        name: "Meropenam 500 mg",
        packing: "Glass Vial"
      },
      {
        id: "23",
        name: "Meropenam 1000 mg",
        packing: "Glass Vial"
      },
      {
        id: "24",
        name: "Ceftazidime Pentahydrate 1000 mg + Tazobactum 125 mg",
        packing: "Glass Vial"
      }
    ]
  },
  {
    id:"12",
    name:"Beta Lactum dry injections",
    image:"/images/tablets.jpeg",
    values:[
      {
        id: 1,
        name: "Ampicillin Sodium 500 mg",
        packing: "Glass Vial"
      },
      {
        id: 2,
        name: "Ampicillin Sodium 1000 mg",
        packing: "Glass Vial"
      },
      {
        id: 3,
        name: "Ampicillin 250 mg + Cloxacillin 250 mg",
        packing: "Glass Vial"
      },
      {
        id: 4,
        name: "Ampicillin 500 mg + Cloxacillin 500 mg",
        packing: "Glass Vial"
      },
      {
        id: 5,
        name: "Amoxicillin 1000 mg + Potassium Clavulanate 200 mg",
        packing: "Glass Vial"
      },
      {
        id: 6,
        name: "Amoxicillin 500 mg + Potassium Clavulanate 100 mg",
        packing: "Glass Vial"
      },
      {
        id: 7,
        name: "Amoxycillin 1000 mg + sulbactam 500 mg",
        packing: "Glass Vial"
      },
      {
        id: 8,
        name: "Imipenem 250 mg + Cilastatin 250 mg",
        packing: "Glass Vial"
      },
      {
        id: 9,
        name: "Imipenem 500 mg + Cilastatin 500 mg",
        packing: "Glass Vial"
      },
      {
        id: 10,
        name: "Pipracillin 2000 mg + Tazobactum 250 mg",
        packing: "Glass Vial"
      },
      {
        id: 11,
        name: "Pipracillin 4000 mg + Tazobactum 500 mg",
        packing: "Glass Vial"
      }
    ]
  },
  {
    id:"13",
    name:"Cephalosporin oral dry powder",
    image:"/images/tablets.jpeg",
    values:[
      {
        id: "1",
        name: "Cefadroxil 125 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: "2",
        name: "Cefixime Trihydrate 50 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: "3",
        name: "Cephalexin 125 mh / 5 ml drops",
        packing: "HDPE Bottle"
      },
      {
        id: "4",
        name: "Cephalexin 100 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: "5",
        name: "Cefuroxime Axetil 125 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: "6",
        name: "Cefpodoxime Proxetil 50 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: "7",
        name: "Cefpodoxime Proxetil 100 mg / 5 ml",
        packing: "HDPE Bottle"
      }
    ]
  },
  {
    id:"14",
    name:"Beta Lactum oral dry powder",
    image:"/images/tablets.jpeg",
    values:[
      {
        id: 1,
        name: "Amoxycillin Trihydrate 125 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: 2,
        name: "Amoxicillin Trihydrate 250 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: 3,
        name: "Amoxycillin Trihydrate 100 mg / 5 ml drops",
        packing: "HDPE Bottle"
      },
      {
        id: 4,
        name: "Ampicillin Trihydrate 250 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: 5,
        name: "Ampicillin Trihydrate 125 mg / 5 ml",
        packing: "HDPE Bottle"
      },
      {
        id: 6,
        name: "Amoxycillin Trihydrate 250mg+ Clavunic Acid62.5mg",
        packing: "HDPE Bottle"
      },
      {
        id: 7,
        name: "Amoxycillin Trihydrate 200mg+ Clavunic Acid28.5mg",
        packing: "HDPE Bottle"
      }
    ]
  }
]

export default products;
