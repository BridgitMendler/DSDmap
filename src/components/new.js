      const nodes = [
        { id: "0default on mortgage", reflexive: false, x: 200, y: 100},
        { id: "1notice of intent to forclose from lender", reflexive: true, x: 200, y: 150},
        { id: "2lender mail a copy of order to docket", reflexive: false, x: 150, y: 200 },
        { id: "3lender file sworn statement of debt including costs associated with foreclosure process on the homeowner's tab", reflexive: false, x: 250, y: 200},
        { id: "4loss mitigation affadavit to homeowner with form allowing homeowner to request mediation", reflexive: true, x: 200, y: 300},
        { id: "5Reach out to Maryland HOPE for free counseling, can discuss mediation strategy", reflexive: false, x: 150, y: 350 },
        { id: "6Homeowner 25 days to submit request for mediation and pay mediation fee", reflexive: false, x: 200, y: 350},
        { id: "7Can file a motion asking the court to waive the fee", reflexive: true, x: 150, y: 400},
        { id: "8Mediation requested (can add up to 60 days to the foreclosure process, valuable time to use to avoid forclosure)", reflexive: false, x: 150, y: 450 },
        { id: "9Office of administrative hearings (OAH) sends a letter stating the time, date, and place of mediation", reflexive: false, x: 200, y: 500},
        { id: "10Send documents to foreclosure attorneys and the office of administrative hearings in the “document exchange” process", reflexive: true, x: 200, y: 550},
        { id: "11Mediation session", reflexive: false, x: 150, y: 600 },
        { id: "12Bring borrowers information worksheet", reflexive: false, x: 200, y: 600},
        { id: "13Modification application", reflexive: true, x: 200, y: 650},
        { id: "14Bank statements", reflexive: false, x: 200, y: 700 },
        { id: "15Pay check stubs", reflexive: false, x: 200, y: 750},
        { id: "16Federal tax returns", reflexive: true, x: 150, y: 750},
        { id: "17Copies of bills, property taxes, insurance", reflexive: false, x: 100, y: 800 },
        { id: 18, reflexive: false, x: 250, y: 800},
        { id: 19, reflexive: true, x: 200, y: 850},
        { id: 20, reflexive: false, x: 200, y: 900 },
        { id: 21, reflexive: false, x: 150, y: 950},
        { id: 22, reflexive: true, x: 200, y: 950},
        { id: 23, reflexive: false, x: 200, y: 1000 }
      ];
      let lastNodeId = 2;
      const linky = [
        { source: nodes[0], target: nodes[1], left: false, right: true },
        { source: nodes[1], target: nodes[2], left: false, right: true },
        { source: nodes[1], target: nodes[3], left: false, right: true },
        { source: nodes[3], target: nodes[4], left: false, right: true },
        { source: nodes[2], target: nodes[4], left: false, right: true },
        { source: nodes[4], target: nodes[6], left: false, right: true },
        { source: nodes[5], target: nodes[6], left: false, right: true },
        { source: nodes[6], target: nodes[7], left: false, right: true },
        { source: nodes[6], target: nodes[8], left: false, right: true },
        { source: nodes[8], target: nodes[9], left: false, right: true },
        { source: nodes[9], target: nodes[10], left: false, right: true },
        { source: nodes[10], target: nodes[11], left: false, right: true },
        // { source: nodes[0], target: nodes[0], left: false, right: true },
        // { source: nodes[], target: nodes[16], left: false, right: true },
        // { source: nodes[16], target: nodes[19], left: false, right: true },
        // { source: nodes[16], target: nodes[17], left: false, right: true },
        // { source: nodes[17], target: nodes[11], left: false, right: true },
        // { source: nodes[12], target: nodes[13], left: false, right: true },
        // { source: nodes[13], target: nodes[14], left: false, right: true },
        // { source: nodes[14], target: nodes[15], left: false, right: true },
        // { source: nodes[15], target: nodes[18], left: false, right: true },
        // { source: nodes[15], target: nodes[19], left: false, right: true },
        // { source: nodes[18], target: nodes[12], left: false, right: true },
        // { source: nodes[19], target: nodes[20], left: false, right: true },
        // { source: nodes[20], target: nodes[22], left: false, right: true },
        // { source: nodes[20], target: nodes[21], left: false, right: true },
        // { source: nodes[21], target: nodes[19], left: false, right: true },
        // { source: nodes[22], target: nodes[23], left: false, right: true }
          ];