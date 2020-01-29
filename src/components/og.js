       const nodes = [
            { id: "dispute", reflexive: false, x: 200, y: 100},
            { id: "claimant submits demand for arbitration to legal office of Kaiser health plan", reflexive: true, x: 200, y: 150},
            { id: "Kaiser confirms receipt of demand", reflexive: false, x: 200, y: 200 },
            { id: "Kaiser confirms receipt of demand", reflexive: false, x: 200, y: 250},
            { id: "Is the arbitration case below 200k?", reflexive: true, x: 200, y: 300},
            { id: "By California Law shall be heard by 3-person arbitration panel", reflexive: false, x: 150, y: 350 },
            { id: 6, reflexive: false, x: 200, y: 350},
            { id: 7, reflexive: true, x: 150, y: 400},
            { id: 8, reflexive: false, x: 150, y: 450 },
            { id: 9, reflexive: false, x: 200, y: 500},
            { id: 10, reflexive: true, x: 200, y: 550},
            { id: 11, reflexive: false, x: 150, y: 600 },
            { id: 12, reflexive: false, x: 200, y: 600},
            { id: 13, reflexive: true, x: 200, y: 650},
            { id: 14, reflexive: false, x: 200, y: 700 },
            { id: 15, reflexive: false, x: 200, y: 750},
            { id: 16, reflexive: true, x: 150, y: 750},
            { id: 17, reflexive: false, x: 100, y: 800 },
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
            { source: nodes[2], target: nodes[3], left: false, right: true },
            { source: nodes[3], target: nodes[4], left: false, right: true },
            { source: nodes[4], target: nodes[5], left: false, right: true },
            { source: nodes[4], target: nodes[6], left: false, right: true },
            { source: nodes[5], target: nodes[7], left: false, right: true },
            { source: nodes[7], target: nodes[8], left: false, right: true },
            { source: nodes[8], target: nodes[9], left: false, right: true },
            { source: nodes[6], target: nodes[9], left: false, right: true },
            { source: nodes[9], target: nodes[10], left: false, right: true },
            { source: nodes[10], target: nodes[11], left: false, right: true },
            { source: nodes[10], target: nodes[12], left: false, right: true },
            { source: nodes[11], target: nodes[16], left: false, right: true },
            { source: nodes[16], target: nodes[19], left: false, right: true },
            { source: nodes[16], target: nodes[17], left: false, right: true },
            { source: nodes[17], target: nodes[11], left: false, right: true },
            { source: nodes[12], target: nodes[13], left: false, right: true },
            { source: nodes[13], target: nodes[14], left: false, right: true },
            { source: nodes[14], target: nodes[15], left: false, right: true },
            { source: nodes[15], target: nodes[18], left: false, right: true },
            { source: nodes[15], target: nodes[19], left: false, right: true },
            { source: nodes[18], target: nodes[12], left: false, right: true },
            { source: nodes[19], target: nodes[20], left: false, right: true },
            { source: nodes[20], target: nodes[22], left: false, right: true },
            { source: nodes[20], target: nodes[21], left: false, right: true },
            { source: nodes[21], target: nodes[19], left: false, right: true },
            { source: nodes[22], target: nodes[23], left: false, right: true }
          ];