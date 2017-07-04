/**
 * Created by wit54 on 02-Jul-17.
 */
var DIR = "images/";
// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1', title: 'I have a popup!',group:'database'},
    {id: 2, label: 'Node 2', title: 'I have a popup!'},
    {id: 3, label: 'Node 3', title: 'I have a popup!'},
    {id: 4, label: 'Node 4', title: 'I have a popup!'},
    {id: 5, label: 'Node 4', title: 'I have a popup!'},
    {id: 6, label: 'Node 4', title: 'I have a popup!'},
    {id: 7, label: 'Node 4', title: 'I have a popup!'},
    {id: 8, label: 'Node 4', title: 'I have a popup!'},
    {id: 9, label: 'Node 4', title: 'I have a popup!'},
    {id: 10, label: 'Node 4', title: 'I have a popup!'},
    {id: 11, label: 'Node 4', title: 'I have a popup!'},
    {id: 12, label: 'Node 4', title: 'I have a popup!'},
    {id: 13, label: 'Node 4', title: 'I have a popup!'},
    {id: 14, label: 'Node 4', title: 'I have a popup!'},
    {id: 15, label: 'Node 4', title: 'I have a popup!'},
    {id: 16, label: 'Node 4', title: 'I have a popup!'},
    {id: 17, label: 'Node 4', title: 'I have a popup!'},
    {id: 18, label: 'Node 4', title: 'I have a popup!'},
    {id: 19, label: 'Node 4', title: 'I have a popup!'},
    {id: 20, label: 'Node 4', title: 'I have a popup!'},
    {id: 21, label: 'Node 4', title: 'I have a popup!'},
    {id: 22, label: 'Node 4', title: 'I have a popup!'},
    {id: 23, label: 'Node 4', title: 'I have a popup!'},
    {id: 24, label: 'Node 4', title: 'I have a popup!'},
    {id: 25, label: 'Node 4', title: 'I have a popup!'},
    {id: 26, label: 'Node 4', title: 'I have a popup!'},
    {id: 27, label: 'Node 4', title: 'I have a popup!'},
    {id: 28, label: 'Node 4', title: 'I have a popup!'},
    {id: 29, label: 'Node 4', title: 'I have a popup!'},
    {id: 30, label: 'Node 5', title: 'I have a popup!'}
]);
// load data
if(!localStorage.getItem('nodes'))
    localStorage.setItem('nodes', '[{"id":"1","label":"Node 1","group":"database","x":1,"y":-259},{"id":"3","group":"neuron","x":-717,"y":-406},{"id":"4","group":"neuron","x":-820,"y":254},{"id":"5","group":"neuron","x":138,"y":-47},{"id":"6","group":"neuron","x":694,"y":-29},{"id":"7","group":"neuron","x":508,"y":105},{"id":"8","group":"neuron","x":502,"y":-91},{"id":"9","label":"Hold","group":"neuron","x":1185,"y":39},{"id":"10","group":"neuron","x":358,"y":-153},{"id":"11","group":"neuron","x":691,"y":-93},{"id":"12","label":"Buy","group":"neuron","x":1225,"y":-147},{"id":"13","group":"neuron","x":696,"y":104},{"id":"14","group":"neuron","x":601,"y":175},{"id":"15","group":"neuron","x":695,"y":44},{"id":"16","group":"neuron","x":500,"y":-157},{"id":"17","group":"neuron","x":599,"y":-26},{"id":"18","group":"neuron","x":355,"y":-27},{"id":"19","group":"neuron","x":507,"y":43},{"id":"20","group":"neuron","x":602,"y":-93},{"id":"21","group":"neuron","x":600,"y":44},{"id":"22","group":"neuron","x":601,"y":-231},{"id":"23","group":"neuron","x":358,"y":102},{"id":"24","group":"neuron","x":504,"y":-27},{"id":"25","group":"neuron","x":601,"y":-156},{"id":"26","label":"Sell","group":"neuron","x":1063,"y":120},{"id":"27","group":"neuron","x":690,"y":-156},{"id":"28","group":"neuron","x":358,"y":39},{"id":"29","group":"neuron","x":357,"y":-90},{"id":"30","group":"neuron","x":602,"y":105},{"id":"31","x":1331,"y":67,"label":"new","group":"csv"},{"id":"32","x":1281,"y":-50,"label":"new","group":"csv"},{"id":"33","x":-397,"y":-48,"label":"API","image":"https://www.interactivebrokers.com/images/2015/template/logo-ib-ibkr-txtwht.svg","group":"dataAPI"},{"id":"34","x":2,"y":-47,"label":"INPUT HANDLER","group":"inputHandler"},{"id":"35","group":"neuron","x":800,"y":109},{"id":"36","group":"neuron","x":795,"y":43},{"id":"37","group":"neuron","x":791,"y":-26},{"id":"38","group":"neuron","x":788,"y":-97},{"id":"39","group":"neuron","x":784,"y":-161},{"id":"40","group":"neuron","x":778,"y":-230},{"id":"41","group":"neuron","x":779,"y":-290},{"id":"42","group":"neuron","x":804,"y":174},{"id":"43","group":"neuron","x":803,"y":250},{"id":"44","group":"neuron","x":882,"y":117},{"id":"45","group":"neuron","x":889,"y":40},{"id":"46","group":"neuron","x":882,"y":-30},{"id":"47","group":"neuron","x":882,"y":-94},{"id":"48","group":"neuron","x":885,"y":-231},{"id":"49","group":"neuron","x":884,"y":-162},{"id":"50","group":"neuron","x":976,"y":-306},{"id":"51","group":"neuron","x":985,"y":248},{"id":"52","group":"neuron","x":890,"y":185},{"id":"53","group":"neuron","x":986,"y":175},{"id":"54","group":"neuron","x":990,"y":109},{"id":"55","group":"neuron","x":981,"y":42},{"id":"56","group":"neuron","x":981,"y":-29},{"id":"57","group":"neuron","x":985,"y":-93},{"id":"58","group":"neuron","x":984,"y":-160},{"id":"59","group":"neuron","x":980,"y":-232},{"id":"60","group":"container","size":50,"x":-674,"y":-286},{"id":"61","image":"https://latex.codecogs.com/svg.latex?%5Csum","shape":"image","size":50,"x":-674,"y":-286}]');
if(!localStorage.getItem('edges'))
    localStorage.setItem('edges', '{"2f788fb1-6ea8-42bd-98f6-fd490a14563e":{"from":10,"to":16,"id":"2f788fb1-6ea8-42bd-98f6-fd490a14563e"},"e8e2bdc4-99bd-472b-922e-7c5e610c0421":{"from":10,"to":8,"id":"e8e2bdc4-99bd-472b-922e-7c5e610c0421"},"08469cd7-4851-4473-a950-bfb3b6968711":{"from":10,"to":24,"id":"08469cd7-4851-4473-a950-bfb3b6968711"},"18819247-987e-4b75-8977-12ae172d75f1":{"from":"10","to":"19","id":"18819247-987e-4b75-8977-12ae172d75f1"},"e325f101-8042-4506-8ebf-17e7c45d4b1f":{"from":"10","to":"7","id":"e325f101-8042-4506-8ebf-17e7c45d4b1f"},"9c491423-3a94-4640-843a-42f61a008bf4":{"from":"29","to":"16","id":"9c491423-3a94-4640-843a-42f61a008bf4"},"1529a838-94a0-4a49-8de9-dd97315c1a98":{"from":"18","to":"16","id":"1529a838-94a0-4a49-8de9-dd97315c1a98"},"a06769b5-2ba7-4fa7-b16e-7cfa72afc3fa":{"from":"29","to":"8","id":"a06769b5-2ba7-4fa7-b16e-7cfa72afc3fa"},"adcc84fc-2a0e-4e6c-8817-8932aa9bd1fc":{"from":"29","to":"24","id":"adcc84fc-2a0e-4e6c-8817-8932aa9bd1fc"},"82df703e-86e4-4b2c-bc09-52e73e660a42":{"from":"29","to":"19","id":"82df703e-86e4-4b2c-bc09-52e73e660a42"},"a3b632e8-8082-4673-90c0-6c16e6cb2fc1":{"from":"29","to":"7","id":"a3b632e8-8082-4673-90c0-6c16e6cb2fc1"},"a78ebced-66a5-4ecf-8384-c18ef8e1eedb":{"from":"18","to":"8","id":"a78ebced-66a5-4ecf-8384-c18ef8e1eedb"},"27667a37-ab87-4086-8ebd-c16f95ae9034":{"from":"18","to":"24","id":"27667a37-ab87-4086-8ebd-c16f95ae9034"},"f467b7ec-ab34-460b-9a58-f1c249b87a8d":{"from":"18","to":"19","id":"f467b7ec-ab34-460b-9a58-f1c249b87a8d"},"0175e062-e953-4a7f-8096-8e16aa6b765d":{"from":"18","to":"7","id":"0175e062-e953-4a7f-8096-8e16aa6b765d"},"99a4fcc5-ceb6-4acb-9e0d-8b0e33b3123e":{"from":"28","to":"16","id":"99a4fcc5-ceb6-4acb-9e0d-8b0e33b3123e"},"3fb3f2e1-1d31-4ded-8f77-51afd3837459":{"from":"28","to":"8","id":"3fb3f2e1-1d31-4ded-8f77-51afd3837459"},"e4b2e513-21cf-4392-9e68-d898950d9bc9":{"from":"28","to":"24","id":"e4b2e513-21cf-4392-9e68-d898950d9bc9"},"7023937f-0686-4a5e-a8cf-cc39ed6ff371":{"from":"28","to":"19","id":"7023937f-0686-4a5e-a8cf-cc39ed6ff371"},"64972300-dc97-4b80-9618-b38a569bc793":{"from":"28","to":"7","id":"64972300-dc97-4b80-9618-b38a569bc793"},"c9c57d83-9413-4d48-8044-8b57e6693fcc":{"from":"23","to":"7","id":"c9c57d83-9413-4d48-8044-8b57e6693fcc"},"93fc0b4c-3914-4894-ae74-a6b2dbbdacb7":{"from":"23","to":"19","id":"93fc0b4c-3914-4894-ae74-a6b2dbbdacb7"},"309ba4c6-d474-49e1-aaad-62c736f8093e":{"from":"23","to":"24","id":"309ba4c6-d474-49e1-aaad-62c736f8093e"},"91b26678-3dea-4028-b3fb-3cf56a9f33b8":{"from":"23","to":"8","id":"91b26678-3dea-4028-b3fb-3cf56a9f33b8"},"96325d0e-4cdd-4fb9-955b-bfa3d67006bc":{"from":"23","to":"16","id":"96325d0e-4cdd-4fb9-955b-bfa3d67006bc"},"fdc47ee7-3925-499c-934f-b5ab9de6bbf0":{"from":"16","to":"25","id":"fdc47ee7-3925-499c-934f-b5ab9de6bbf0"},"28ada8e8-c4d1-4451-b51c-44f4a4d491cf":{"from":"16","to":"20","id":"28ada8e8-c4d1-4451-b51c-44f4a4d491cf"},"ee1ae920-b94e-448e-95ba-b83525d3847f":{"from":"16","to":"17","id":"ee1ae920-b94e-448e-95ba-b83525d3847f"},"9ee14449-2a60-46fb-9481-3967e77d8f1f":{"from":"16","to":"21","id":"9ee14449-2a60-46fb-9481-3967e77d8f1f"},"fba2daba-d278-4bfc-b8f5-3ca4e79c0bf4":{"from":"16","to":"30","id":"fba2daba-d278-4bfc-b8f5-3ca4e79c0bf4"},"e46d9e62-5378-4406-a432-a0a19be97860":{"from":"8","to":"25","id":"e46d9e62-5378-4406-a432-a0a19be97860"},"b0faa988-f1a8-4642-9782-0db74566c6d8":{"from":"8","to":"20","id":"b0faa988-f1a8-4642-9782-0db74566c6d8"},"f0998206-5cbe-4b2c-ad20-a229c9624ea2":{"from":"8","to":"17","id":"f0998206-5cbe-4b2c-ad20-a229c9624ea2"},"e2da0ee4-d88c-4977-b3a9-4339b0e03ea6":{"from":"8","to":"21","id":"e2da0ee4-d88c-4977-b3a9-4339b0e03ea6"},"3fcfa411-5d4c-455c-8bb3-2f4b44713ffa":{"from":"8","to":"30","id":"3fcfa411-5d4c-455c-8bb3-2f4b44713ffa"},"c1e86833-7032-4975-be23-aa8bd46936d4":{"from":"24","to":"25","id":"c1e86833-7032-4975-be23-aa8bd46936d4"},"9a81d0a9-f25b-4a7b-8af9-0de233db5daa":{"from":"24","to":"20","id":"9a81d0a9-f25b-4a7b-8af9-0de233db5daa"},"85031963-8a3d-4979-a71e-ad7718b0d32d":{"from":"24","to":"17","id":"85031963-8a3d-4979-a71e-ad7718b0d32d"},"f8ec358f-d178-46eb-b0a3-04f0df703599":{"from":"24","to":"21","id":"f8ec358f-d178-46eb-b0a3-04f0df703599"},"2cbd8ccc-d7ff-4d4a-9290-979442f6b5d9":{"from":"24","to":"30","id":"2cbd8ccc-d7ff-4d4a-9290-979442f6b5d9"},"02391d02-184f-498d-8ad7-70d7202647fd":{"from":"19","to":"25","id":"02391d02-184f-498d-8ad7-70d7202647fd"},"ea081037-3e0d-41da-8bc0-06e5449c9bc2":{"from":"19","to":"20","id":"ea081037-3e0d-41da-8bc0-06e5449c9bc2"},"b70b963f-22e8-42c3-8c6a-166a3bf1e496":{"from":"19","to":"17","id":"b70b963f-22e8-42c3-8c6a-166a3bf1e496"},"e8bf6e12-33a8-485c-8547-51e02411f780":{"from":"19","to":"21","id":"e8bf6e12-33a8-485c-8547-51e02411f780"},"f586cf7c-7c5e-4aec-be13-c1003b990061":{"from":"19","to":"30","id":"f586cf7c-7c5e-4aec-be13-c1003b990061"},"9758960f-f976-4a90-9def-eb979af7197b":{"from":"7","to":"30","id":"9758960f-f976-4a90-9def-eb979af7197b"},"89a1b717-201d-4561-a89c-5df9ec07f3f9":{"from":"7","to":"21","id":"89a1b717-201d-4561-a89c-5df9ec07f3f9"},"492c2664-fc21-4673-84ac-38593ae05c90":{"from":"7","to":"17","id":"492c2664-fc21-4673-84ac-38593ae05c90"},"9588db55-e24e-40d1-9f41-103de8ecb168":{"from":"7","to":"20","id":"9588db55-e24e-40d1-9f41-103de8ecb168"},"ddbf57df-cc68-448b-be10-ff9e36969da7":{"from":"7","to":"25","id":"ddbf57df-cc68-448b-be10-ff9e36969da7"},"d90d5620-b115-4abd-b2d5-e201b07d6b38":{"from":"25","to":"27","id":"d90d5620-b115-4abd-b2d5-e201b07d6b38"},"25b4072b-e784-484a-ad59-2ef842eeb912":{"from":"25","to":"11","id":"25b4072b-e784-484a-ad59-2ef842eeb912"},"4b4faf84-b9b2-439c-8e7b-7ea53a1f4412":{"from":"25","to":"6","id":"4b4faf84-b9b2-439c-8e7b-7ea53a1f4412"},"e6b71ef8-f211-473a-ad03-f33fc2e3713d":{"from":"25","to":"15","id":"e6b71ef8-f211-473a-ad03-f33fc2e3713d"},"c9dcd7c0-8d43-4c24-806e-287f1e4ee931":{"from":"25","to":"13","id":"c9dcd7c0-8d43-4c24-806e-287f1e4ee931"},"2bbd1db2-b782-44ef-b2e8-0849d707b73c":{"from":"20","to":"27","id":"2bbd1db2-b782-44ef-b2e8-0849d707b73c"},"015a607e-a3f2-4c0b-aa8e-d7cf3f30ebd9":{"from":"20","to":"11","id":"015a607e-a3f2-4c0b-aa8e-d7cf3f30ebd9"},"e7658e89-7323-4e84-821a-1a9f2f555398":{"from":"20","to":"6","id":"e7658e89-7323-4e84-821a-1a9f2f555398"},"e65a6d76-af0a-46bb-8278-b0c0584d73e9":{"from":"20","to":"15","id":"e65a6d76-af0a-46bb-8278-b0c0584d73e9"},"096a464a-92e8-4ef6-bf24-d63b982f6fb1":{"from":"20","to":"13","id":"096a464a-92e8-4ef6-bf24-d63b982f6fb1"},"fb0e0ed3-e670-4f51-98c1-0a10bf0b5ef5":{"from":"17","to":"27","id":"fb0e0ed3-e670-4f51-98c1-0a10bf0b5ef5"},"2f652d0e-423d-43eb-91e1-bab8bf7b6445":{"from":"17","to":"11","id":"2f652d0e-423d-43eb-91e1-bab8bf7b6445"},"152625ee-88ef-4aa0-9014-e1f37903df1d":{"from":"17","to":"6","id":"152625ee-88ef-4aa0-9014-e1f37903df1d"},"4a944b85-0573-449e-9d20-924fb68215cd":{"from":"17","to":"15","id":"4a944b85-0573-449e-9d20-924fb68215cd"},"800b2375-d874-4dd1-afb5-3f5fea1ed4e7":{"from":"17","to":"13","id":"800b2375-d874-4dd1-afb5-3f5fea1ed4e7"},"47e104a7-27f6-440d-90ba-7b0676d93c95":{"from":"21","to":"27","id":"47e104a7-27f6-440d-90ba-7b0676d93c95"},"b660838c-8c2b-4c0e-86c1-3c52178ccf86":{"from":"21","to":"11","id":"b660838c-8c2b-4c0e-86c1-3c52178ccf86"},"7509a455-c3a4-488f-b9b8-346278b5f0a0":{"from":"21","to":"6","id":"7509a455-c3a4-488f-b9b8-346278b5f0a0"},"7870e3f1-2e4f-4b72-8fcc-976d5a55e59a":{"from":"21","to":"15","id":"7870e3f1-2e4f-4b72-8fcc-976d5a55e59a"},"ff00c411-7dd6-4552-b465-47591eb5a4b4":{"from":"21","to":"13","id":"ff00c411-7dd6-4552-b465-47591eb5a4b4"},"987a486a-4213-4697-b880-83da8ca3f1a3":{"from":"30","to":"13","id":"987a486a-4213-4697-b880-83da8ca3f1a3"},"d9d9f57a-e320-4846-a460-f628dd786acd":{"from":"30","to":"15","id":"d9d9f57a-e320-4846-a460-f628dd786acd"},"e86d2fa0-c0c6-4c50-93c7-c2313521fbfb":{"from":"30","to":"6","id":"e86d2fa0-c0c6-4c50-93c7-c2313521fbfb"},"c940030a-67fd-41ad-939d-00afd11d4c17":{"from":"30","to":"11","id":"c940030a-67fd-41ad-939d-00afd11d4c17"},"ba99bd49-2784-4850-bd50-5de61afb6f31":{"from":"30","to":"27","id":"ba99bd49-2784-4850-bd50-5de61afb6f31"},"58924106-2f06-487e-b332-fc014155d6f5":{"from":"16","to":"22","id":"58924106-2f06-487e-b332-fc014155d6f5"},"3412cd9f-f1e7-4c39-8a2c-73ffc8d6e4a5":{"from":"8","to":"22","id":"3412cd9f-f1e7-4c39-8a2c-73ffc8d6e4a5"},"5cbb4315-0814-474d-9622-fe4b718e3998":{"from":"24","to":"22","id":"5cbb4315-0814-474d-9622-fe4b718e3998"},"002a209e-3102-462d-aebc-10cab769eb9f":{"from":"19","to":"22","id":"002a209e-3102-462d-aebc-10cab769eb9f"},"31d86737-7739-4cba-a3f0-bd4295f6b945":{"from":"7","to":"22","id":"31d86737-7739-4cba-a3f0-bd4295f6b945"},"af8ef3b5-d036-420d-9dfb-a96276b517c2":{"from":"16","to":"14","id":"af8ef3b5-d036-420d-9dfb-a96276b517c2"},"f0a66bf6-3179-4ee9-8219-99cbe736d87f":{"from":"8","to":"14","id":"f0a66bf6-3179-4ee9-8219-99cbe736d87f"},"843ad641-6fc2-41bc-895a-83c7198e4179":{"from":"24","to":"14","id":"843ad641-6fc2-41bc-895a-83c7198e4179"},"be27605b-59ca-4054-8471-277f04acc171":{"from":"19","to":"14","id":"be27605b-59ca-4054-8471-277f04acc171"},"3e99b659-abe3-4413-9b06-13052d8585d3":{"from":"7","to":"14","id":"3e99b659-abe3-4413-9b06-13052d8585d3"},"70f21332-452c-40da-8c78-55c1de234d8d":{"from":"13","to":"14","id":"70f21332-452c-40da-8c78-55c1de234d8d"},"767f074c-4942-43e7-99ee-4cb6c0e9bd15":{"from":"15","to":"14","id":"767f074c-4942-43e7-99ee-4cb6c0e9bd15"},"39e7fab5-31e4-427c-8bf9-f180aa984132":{"from":"6","to":"14","id":"39e7fab5-31e4-427c-8bf9-f180aa984132"},"25e83ff0-76ad-4c7e-b0ba-85fb34f532a9":{"from":"11","to":"14","id":"25e83ff0-76ad-4c7e-b0ba-85fb34f532a9"},"4be0a04e-c75a-42b1-9ac2-ebc0a3e88548":{"from":"27","to":"14","id":"4be0a04e-c75a-42b1-9ac2-ebc0a3e88548"},"5c9e53ab-7dc3-4a3e-8e66-3b39fef809c0":{"from":"22","to":"27","id":"5c9e53ab-7dc3-4a3e-8e66-3b39fef809c0"},"00eb2c2b-058a-4892-ad71-7b06939b18c5":{"from":"22","to":"11","id":"00eb2c2b-058a-4892-ad71-7b06939b18c5"},"11d30cc4-d572-45f2-a6b1-9e52ec185be2":{"from":"22","to":"6","id":"11d30cc4-d572-45f2-a6b1-9e52ec185be2"},"a0888a07-1ea7-4af3-b750-61d6fbee720f":{"from":"22","to":"15","id":"a0888a07-1ea7-4af3-b750-61d6fbee720f"},"d54760e5-199b-4e1e-a476-1977c6fd09f2":{"from":"22","to":"13","id":"d54760e5-199b-4e1e-a476-1977c6fd09f2"},"ba64df0c-8cb1-405a-9154-81093bf5791a":{"from":"1","to":"34","id":"ba64df0c-8cb1-405a-9154-81093bf5791a"},"ca1ce004-73f0-4d5a-96a2-145f5697dc85":{"from":"33","to":"34","id":"ca1ce004-73f0-4d5a-96a2-145f5697dc85"},"a7cbd2e0-d05c-485c-9e5d-70846ac1422f":{"from":"5","to":"10","id":"a7cbd2e0-d05c-485c-9e5d-70846ac1422f"},"5c33f72b-4d5a-4e13-88cd-e47a6e6faeff":{"from":"5","to":"29","id":"5c33f72b-4d5a-4e13-88cd-e47a6e6faeff"},"634e4124-fe3f-4951-903d-7ac6ba95041c":{"from":"5","to":"18","id":"634e4124-fe3f-4951-903d-7ac6ba95041c"},"8e56bac2-c330-4d00-922e-0f1961680c97":{"from":"5","to":"28","id":"8e56bac2-c330-4d00-922e-0f1961680c97"},"3803fcaf-a204-41a7-8ae0-07b3630eebb2":{"from":"5","to":"23","id":"3803fcaf-a204-41a7-8ae0-07b3630eebb2"},"30993a23-66e5-44ab-80b1-5996bd357c0e":{"from":"27","to":41,"id":"30993a23-66e5-44ab-80b1-5996bd357c0e"},"a091ad9d-39ab-490c-9c7f-722d8db88e45":{"from":"11","to":41,"id":"a091ad9d-39ab-490c-9c7f-722d8db88e45"},"2b636177-5551-4ee6-8127-712fb1a44a85":{"from":"6","to":41,"id":"2b636177-5551-4ee6-8127-712fb1a44a85"},"ce4162ba-97dd-417f-8624-534cf2fa9348":{"from":"15","to":41,"id":"ce4162ba-97dd-417f-8624-534cf2fa9348"},"1f993d70-c0a0-4bc5-8d3f-24bca63e576b":{"from":"13","to":41,"id":"1f993d70-c0a0-4bc5-8d3f-24bca63e576b"},"c454451d-05d8-471c-8831-e5d9ce4927df":{"from":"27","to":40,"id":"c454451d-05d8-471c-8831-e5d9ce4927df"},"959f2302-0d8a-4891-a5c9-93dffffec4a9":{"from":"11","to":40,"id":"959f2302-0d8a-4891-a5c9-93dffffec4a9"},"ab9c0cb5-afda-4ff6-895d-ccd2cf69f246":{"from":"6","to":40,"id":"ab9c0cb5-afda-4ff6-895d-ccd2cf69f246"},"e0671a2c-a758-4357-9e29-c0a9a7f4807a":{"from":"15","to":40,"id":"e0671a2c-a758-4357-9e29-c0a9a7f4807a"},"fef183c0-10e5-41c4-a8f0-a82917616943":{"from":"13","to":40,"id":"fef183c0-10e5-41c4-a8f0-a82917616943"},"2f53b3f2-c90d-40e4-8e1f-33631d1080bd":{"from":"27","to":39,"id":"2f53b3f2-c90d-40e4-8e1f-33631d1080bd"},"2021c751-15a9-4b90-81d2-11a2d62883c9":{"from":"11","to":39,"id":"2021c751-15a9-4b90-81d2-11a2d62883c9"},"76897d0b-7a49-4939-b5c2-4fbf61c52b36":{"from":"6","to":39,"id":"76897d0b-7a49-4939-b5c2-4fbf61c52b36"},"65159f34-3a74-4602-94e1-18a7178364a7":{"from":"15","to":39,"id":"65159f34-3a74-4602-94e1-18a7178364a7"},"cd891f7a-2d71-4c2e-a3a0-03f26087978b":{"from":"13","to":39,"id":"cd891f7a-2d71-4c2e-a3a0-03f26087978b"},"84681f69-186f-41be-b661-c4df8cfe2533":{"from":"27","to":38,"id":"84681f69-186f-41be-b661-c4df8cfe2533"},"66e56e4d-cec5-4bb8-889b-dc33ba659078":{"from":"27","to":38,"id":"66e56e4d-cec5-4bb8-889b-dc33ba659078"},"ebed73bb-d474-4f8c-8e5f-4b7f02df6321":{"from":"11","to":38,"id":"ebed73bb-d474-4f8c-8e5f-4b7f02df6321"},"15f59b31-f9c8-4895-aa9f-b6b8e0c0939b":{"from":"6","to":38,"id":"15f59b31-f9c8-4895-aa9f-b6b8e0c0939b"},"e3179edc-e9b6-45d0-9c54-b52b1f864b00":{"from":"15","to":38,"id":"e3179edc-e9b6-45d0-9c54-b52b1f864b00"},"a337b974-9dfa-420c-b713-0c9caf1995b1":{"from":"13","to":38,"id":"a337b974-9dfa-420c-b713-0c9caf1995b1"},"78a7bb95-042c-4cfd-91b4-c87373054a6e":{"from":"27","to":37,"id":"78a7bb95-042c-4cfd-91b4-c87373054a6e"},"48c3a528-808d-4c31-a62b-5642a81e7026":{"from":"11","to":37,"id":"48c3a528-808d-4c31-a62b-5642a81e7026"},"8e150128-8794-4d9b-bccd-efdb1c4e5e43":{"from":"6","to":37,"id":"8e150128-8794-4d9b-bccd-efdb1c4e5e43"},"56a06be2-2f88-4c00-956f-38e679076023":{"from":"15","to":37,"id":"56a06be2-2f88-4c00-956f-38e679076023"},"447c264f-c59c-4957-a470-22647e155bab":{"from":"13","to":37,"id":"447c264f-c59c-4957-a470-22647e155bab"},"145ba402-1ede-40e0-b6c4-c402957dcdd8":{"from":"27","to":36,"id":"145ba402-1ede-40e0-b6c4-c402957dcdd8"},"11e390d5-99f3-4f3d-bafa-5249e1cadda1":{"from":"11","to":36,"id":"11e390d5-99f3-4f3d-bafa-5249e1cadda1"},"acacaba8-62b2-416c-8c5c-6ecc4c0cd60a":{"from":"15","to":36,"id":"acacaba8-62b2-416c-8c5c-6ecc4c0cd60a"},"60efc3d0-36a8-4f3f-a006-5da06a2a2a00":{"from":"6","to":36,"id":"60efc3d0-36a8-4f3f-a006-5da06a2a2a00"},"c9b8ad5f-0db9-49a7-80c3-d32d32aacb81":{"from":"13","to":36,"id":"c9b8ad5f-0db9-49a7-80c3-d32d32aacb81"},"6117fea1-8731-453e-b1da-8f6d4b8e0e97":{"from":"27","to":35,"id":"6117fea1-8731-453e-b1da-8f6d4b8e0e97"},"a7a1e5fd-61f3-48ca-b352-0fe47b67a732":{"from":"11","to":35,"id":"a7a1e5fd-61f3-48ca-b352-0fe47b67a732"},"045309e3-2a25-4dc7-bb9e-c984cd03774c":{"from":"6","to":35,"id":"045309e3-2a25-4dc7-bb9e-c984cd03774c"},"c92d80b3-90ac-49af-9f6f-0cde5369f2c4":{"from":"15","to":35,"id":"c92d80b3-90ac-49af-9f6f-0cde5369f2c4"},"8b961dd4-f220-4054-aad5-b0211d85efbc":{"from":"13","to":35,"id":"8b961dd4-f220-4054-aad5-b0211d85efbc"},"01349bc5-ec5c-47b1-befc-848d7ae078d6":{"from":"27","to":42,"id":"01349bc5-ec5c-47b1-befc-848d7ae078d6"},"3ab295a1-023d-4d52-84a1-16617e9c539a":{"from":"11","to":42,"id":"3ab295a1-023d-4d52-84a1-16617e9c539a"},"af02c18c-790a-4673-899e-87788d05df4b":{"from":"6","to":42,"id":"af02c18c-790a-4673-899e-87788d05df4b"},"6dea9e73-dee6-4638-8a74-40a26a54d7f6":{"from":"15","to":42,"id":"6dea9e73-dee6-4638-8a74-40a26a54d7f6"},"2909417a-91ea-4886-a68b-ce234c3b50c4":{"from":"13","to":42,"id":"2909417a-91ea-4886-a68b-ce234c3b50c4"},"8b31a92c-f1cc-413a-a9df-c394a6354d50":{"from":"27","to":41,"id":"8b31a92c-f1cc-413a-a9df-c394a6354d50"},"753e7eb7-3d0b-4a4f-8599-7037334cf0ca":{"from":"27","to":43,"id":"753e7eb7-3d0b-4a4f-8599-7037334cf0ca"},"dda833bd-81c9-423a-8d67-7c4154d0ae0e":{"from":"11","to":43,"id":"dda833bd-81c9-423a-8d67-7c4154d0ae0e"},"c555253b-c348-4a32-9456-2baf7657b338":{"from":"6","to":43,"id":"c555253b-c348-4a32-9456-2baf7657b338"},"22267e27-04ff-4697-b9bd-227b25a84986":{"from":"15","to":43,"id":"22267e27-04ff-4697-b9bd-227b25a84986"},"6623fb6d-d446-4eb8-a188-b3046f549eb6":{"from":"13","to":43,"id":"6623fb6d-d446-4eb8-a188-b3046f549eb6"},"45d4809b-f357-40e1-a60d-29e82c1357b2":{"from":"41","to":48,"id":"45d4809b-f357-40e1-a60d-29e82c1357b2"},"288a84b3-1ac3-4cf7-bf9c-e1528bbb7eeb":{"from":"41","to":49,"id":"288a84b3-1ac3-4cf7-bf9c-e1528bbb7eeb"},"0796b119-cdbe-436d-9fd7-dcd0d7567260":{"from":"41","to":47,"id":"0796b119-cdbe-436d-9fd7-dcd0d7567260"},"3e1b7046-8426-42aa-8aa5-28188aa0d7d4":{"from":"41","to":46,"id":"3e1b7046-8426-42aa-8aa5-28188aa0d7d4"},"1d1c32f8-8cfc-4f4b-8a8d-348730292f78":{"from":"41","to":45,"id":"1d1c32f8-8cfc-4f4b-8a8d-348730292f78"},"a24041fc-3dd2-4216-8b75-3408e95a5f23":{"from":"41","to":44,"id":"a24041fc-3dd2-4216-8b75-3408e95a5f23"},"45d84aed-b6ef-4f84-970c-81d0a681f7f5":{"from":"41","to":52,"id":"45d84aed-b6ef-4f84-970c-81d0a681f7f5"},"b2e71ab2-59f9-4df7-a06b-dd0dd7d3b5db":{"from":"40","to":48,"id":"b2e71ab2-59f9-4df7-a06b-dd0dd7d3b5db"},"f1db0ccb-ed58-4bed-b2e8-74d4d85b4005":{"from":"40","to":49,"id":"f1db0ccb-ed58-4bed-b2e8-74d4d85b4005"},"049ee67c-e68d-4e97-9db5-c7e15a08f2fa":{"from":"40","to":47,"id":"049ee67c-e68d-4e97-9db5-c7e15a08f2fa"},"4d24c3cf-0567-49b8-988f-265d0edc526e":{"from":"40","to":46,"id":"4d24c3cf-0567-49b8-988f-265d0edc526e"},"217b7e7f-7372-48a4-9419-8874321e09ce":{"from":"40","to":45,"id":"217b7e7f-7372-48a4-9419-8874321e09ce"},"a7f51d96-77dd-4138-a8f0-be693b41c111":{"from":"40","to":44,"id":"a7f51d96-77dd-4138-a8f0-be693b41c111"},"e473d7a2-18cb-415e-8239-f86cb284e4af":{"from":"40","to":52,"id":"e473d7a2-18cb-415e-8239-f86cb284e4af"},"3fc99954-2a54-4966-84c4-2a23d881ac1e":{"from":"39","to":48,"id":"3fc99954-2a54-4966-84c4-2a23d881ac1e"},"74993e4a-8d78-4cb3-8c1a-7b7f15ce5a81":{"from":"39","to":49,"id":"74993e4a-8d78-4cb3-8c1a-7b7f15ce5a81"},"dcfa0a76-f2e2-49c7-a1b5-735bda63ad04":{"from":"39","to":47,"id":"dcfa0a76-f2e2-49c7-a1b5-735bda63ad04"},"f8c875bf-7893-4856-94ff-3e1039385bce":{"from":"39","to":46,"id":"f8c875bf-7893-4856-94ff-3e1039385bce"},"0acb1501-3251-4546-a11e-353370e7975f":{"from":"39","to":45,"id":"0acb1501-3251-4546-a11e-353370e7975f"},"16bb5ec4-d030-42af-8fd7-7ce714e8ff19":{"from":"39","to":44,"id":"16bb5ec4-d030-42af-8fd7-7ce714e8ff19"},"bac2bf44-8514-42b9-b05a-d20d606d10bb":{"from":"39","to":52,"id":"bac2bf44-8514-42b9-b05a-d20d606d10bb"},"4fecd795-a11d-45c2-a062-640ddc64e9a1":{"from":"38","to":52,"id":"4fecd795-a11d-45c2-a062-640ddc64e9a1"},"bc812fef-2939-4d3c-85a8-aac7964c4333":{"from":"38","to":44,"id":"bc812fef-2939-4d3c-85a8-aac7964c4333"},"b7c142df-ebb0-4fb1-a4ea-7161d1565e7d":{"from":"38","to":45,"id":"b7c142df-ebb0-4fb1-a4ea-7161d1565e7d"},"c127b562-2ed1-4a85-8787-c4dfd5321f37":{"from":"38","to":46,"id":"c127b562-2ed1-4a85-8787-c4dfd5321f37"},"d3a7a400-4bfa-4b76-9398-4ba535ffd04f":{"from":"38","to":47,"id":"d3a7a400-4bfa-4b76-9398-4ba535ffd04f"},"1dff337b-55e3-4fc0-a240-f7e650a0fb9e":{"from":"38","to":49,"id":"1dff337b-55e3-4fc0-a240-f7e650a0fb9e"},"ff225d10-047d-4e76-b012-48a33a64af20":{"from":"38","to":48,"id":"ff225d10-047d-4e76-b012-48a33a64af20"},"7f136529-6015-4d0f-abed-38051c63c842":{"from":"37","to":48,"id":"7f136529-6015-4d0f-abed-38051c63c842"},"3d1afd60-7d10-4a31-99b3-3bd24995a1f6":{"from":"37","to":49,"id":"3d1afd60-7d10-4a31-99b3-3bd24995a1f6"},"63572df7-15e5-477c-9c35-7566863c204f":{"from":"37","to":47,"id":"63572df7-15e5-477c-9c35-7566863c204f"},"a3833c25-7e06-4c10-814c-7a5bab3306df":{"from":"37","to":46,"id":"a3833c25-7e06-4c10-814c-7a5bab3306df"},"37fa9951-4538-411c-a672-5b02db5814ec":{"from":"37","to":45,"id":"37fa9951-4538-411c-a672-5b02db5814ec"},"98592e2c-fbd6-4aa4-8014-d2af01dc4ace":{"from":"37","to":44,"id":"98592e2c-fbd6-4aa4-8014-d2af01dc4ace"},"d6f19abf-b92f-495c-b074-19e35bacc155":{"from":"37","to":52,"id":"d6f19abf-b92f-495c-b074-19e35bacc155"},"8aec566a-b241-42dc-9511-0e4e722351e4":{"from":"36","to":48,"id":"8aec566a-b241-42dc-9511-0e4e722351e4"},"b5d00049-c422-43c6-91eb-befd8c2ea285":{"from":"36","to":49,"id":"b5d00049-c422-43c6-91eb-befd8c2ea285"},"783e6f18-7d7f-445e-93e9-55730c5d83ce":{"from":"36","to":47,"id":"783e6f18-7d7f-445e-93e9-55730c5d83ce"},"c7e5525d-3b0c-4df4-a28b-04b2c86edf6f":{"from":"36","to":46,"id":"c7e5525d-3b0c-4df4-a28b-04b2c86edf6f"},"45b71727-4f84-4328-b423-5ec3f12f3c43":{"from":"36","to":45,"id":"45b71727-4f84-4328-b423-5ec3f12f3c43"},"ccce47fb-67f7-48dc-b27d-7540f3c96920":{"from":"36","to":44,"id":"ccce47fb-67f7-48dc-b27d-7540f3c96920"},"01107c76-5f76-45a1-8601-149a2f43a03c":{"from":"36","to":52,"id":"01107c76-5f76-45a1-8601-149a2f43a03c"},"2603eaa6-1e6e-4e15-9ebd-bcb7a787b694":{"from":"35","to":48,"id":"2603eaa6-1e6e-4e15-9ebd-bcb7a787b694"},"41523d7c-8be7-4ce2-a183-b4ba3f7ddc1c":{"from":"35","to":49,"id":"41523d7c-8be7-4ce2-a183-b4ba3f7ddc1c"},"cd4254b4-5e74-41e1-aa56-9ef218aec39a":{"from":"35","to":47,"id":"cd4254b4-5e74-41e1-aa56-9ef218aec39a"},"bf5d342e-b6a5-4da5-9a01-4349447dd706":{"from":"35","to":46,"id":"bf5d342e-b6a5-4da5-9a01-4349447dd706"},"87f0be90-0cec-4ef7-9d02-7ae0a3cf9882":{"from":"35","to":45,"id":"87f0be90-0cec-4ef7-9d02-7ae0a3cf9882"},"1f0246a0-7fbf-41da-9f16-4ab1c29d298b":{"from":"35","to":44,"id":"1f0246a0-7fbf-41da-9f16-4ab1c29d298b"},"20a2f279-b6b5-4b94-a685-f2c7aba73ca8":{"from":"35","to":52,"id":"20a2f279-b6b5-4b94-a685-f2c7aba73ca8"},"eee59e9b-e6ee-4154-a010-1697973eda78":{"from":"42","to":52,"id":"eee59e9b-e6ee-4154-a010-1697973eda78"},"556d71c8-8b0a-4641-9c48-3f2b8a3708ef":{"from":"42","to":44,"id":"556d71c8-8b0a-4641-9c48-3f2b8a3708ef"},"74fab346-b266-42c4-97c4-617b817f09f9":{"from":"42","to":45,"id":"74fab346-b266-42c4-97c4-617b817f09f9"},"9ad8b33f-9103-41b9-a589-d5203870a827":{"from":"42","to":46,"id":"9ad8b33f-9103-41b9-a589-d5203870a827"},"df99777b-e7f0-443b-be1d-4adda702db37":{"from":"42","to":46,"id":"df99777b-e7f0-443b-be1d-4adda702db37"},"8cba334a-9052-434f-8a76-3e267468aaac":{"from":"42","to":47,"id":"8cba334a-9052-434f-8a76-3e267468aaac"},"d8dd4bae-c164-4780-aa90-94eb6644888d":{"from":"42","to":47,"id":"d8dd4bae-c164-4780-aa90-94eb6644888d"},"24008479-ae23-4e8d-8389-bb54fabcf5cf":{"from":"42","to":49,"id":"24008479-ae23-4e8d-8389-bb54fabcf5cf"},"f33dc8ef-8d0f-47e2-b685-d3d681b851e0":{"from":"42","to":48,"id":"f33dc8ef-8d0f-47e2-b685-d3d681b851e0"},"acb9d4ef-987b-43e9-8124-df892e251176":{"from":"43","to":52,"id":"acb9d4ef-987b-43e9-8124-df892e251176"},"daf8174b-29b8-4a89-ac91-53dd82494f3f":{"from":"42","to":44,"id":"daf8174b-29b8-4a89-ac91-53dd82494f3f"},"e5697be7-7fa9-4485-bce9-15d3e67f62cd":{"from":"43","to":44,"id":"e5697be7-7fa9-4485-bce9-15d3e67f62cd"},"73356b91-59b4-48eb-8947-f7c886a9a225":{"from":"43","to":45,"id":"73356b91-59b4-48eb-8947-f7c886a9a225"},"1e45bc44-9d49-489b-a2f2-18bbc26054c8":{"from":"43","to":46,"id":"1e45bc44-9d49-489b-a2f2-18bbc26054c8"},"0c907280-15e3-4f10-8907-87acc509f835":{"from":"43","to":47,"id":"0c907280-15e3-4f10-8907-87acc509f835"},"45f9dc6e-6b9c-48f3-82da-7eec797a570e":{"from":"43","to":49,"id":"45f9dc6e-6b9c-48f3-82da-7eec797a570e"},"51368661-7893-422d-b156-f5b2b40e37ac":{"from":"43","to":48,"id":"51368661-7893-422d-b156-f5b2b40e37ac"},"b0a666da-cd69-43d1-90e1-e9897d1938cd":{"from":48,"to":50,"id":"b0a666da-cd69-43d1-90e1-e9897d1938cd"},"4d47ee37-e983-4284-9990-4e38e765bcfe":{"from":48,"to":59,"id":"4d47ee37-e983-4284-9990-4e38e765bcfe"},"e4eb718f-0967-4de4-934a-1fec1f4059aa":{"from":48,"to":58,"id":"e4eb718f-0967-4de4-934a-1fec1f4059aa"},"f4b3c536-62b2-4213-ac8c-a582717cabe2":{"from":48,"to":57,"id":"f4b3c536-62b2-4213-ac8c-a582717cabe2"},"05d7f13f-d995-44c7-ae2b-f7ea63f28945":{"from":48,"to":56,"id":"05d7f13f-d995-44c7-ae2b-f7ea63f28945"},"1cfd2f68-8426-42e4-b1e4-b477bf59b3fa":{"from":48,"to":55,"id":"1cfd2f68-8426-42e4-b1e4-b477bf59b3fa"},"946fc594-5832-4184-87ff-d9e651f4f2c3":{"from":48,"to":54,"id":"946fc594-5832-4184-87ff-d9e651f4f2c3"},"4d036d4b-83d5-4381-ab7c-e6a77ee4f9b0":{"from":48,"to":53,"id":"4d036d4b-83d5-4381-ab7c-e6a77ee4f9b0"},"e912b4e1-0c7d-4a26-9371-576e7b55800e":{"from":48,"to":51,"id":"e912b4e1-0c7d-4a26-9371-576e7b55800e"},"7c670cc9-612c-4f95-9f16-8ef6e7933c37":{"from":49,"to":50,"id":"7c670cc9-612c-4f95-9f16-8ef6e7933c37"},"5d1ca69a-ccc5-4853-8a6b-34a40a44329b":{"from":49,"to":59,"id":"5d1ca69a-ccc5-4853-8a6b-34a40a44329b"},"f3a7c185-421d-498b-b35b-bea1e0c5fb7a":{"from":49,"to":58,"id":"f3a7c185-421d-498b-b35b-bea1e0c5fb7a"},"319dd812-2366-4590-ae69-f12abc72a8cb":{"from":49,"to":57,"id":"319dd812-2366-4590-ae69-f12abc72a8cb"},"b9fa5b6c-2307-4497-ad16-685f1f18fae6":{"from":49,"to":56,"id":"b9fa5b6c-2307-4497-ad16-685f1f18fae6"},"b1adbf21-86f8-4f36-9f65-46d539d7c90b":{"from":49,"to":55,"id":"b1adbf21-86f8-4f36-9f65-46d539d7c90b"},"824e7144-a0f2-445e-9602-a022e94f0abd":{"from":49,"to":54,"id":"824e7144-a0f2-445e-9602-a022e94f0abd"},"ba12a7b4-5e8d-40ad-a80d-25a1d0ecb7f9":{"from":49,"to":53,"id":"ba12a7b4-5e8d-40ad-a80d-25a1d0ecb7f9"},"b5686555-5936-42ba-9703-de34518c1d27":{"from":49,"to":51,"id":"b5686555-5936-42ba-9703-de34518c1d27"},"d6d5e9a3-077b-4a4f-9979-825e44480694":{"from":47,"to":50,"id":"d6d5e9a3-077b-4a4f-9979-825e44480694"},"da803d95-85ce-4d17-8548-cfb55d98a5e0":{"from":47,"to":59,"id":"da803d95-85ce-4d17-8548-cfb55d98a5e0"},"9317fba2-b2d0-47fa-a05f-16a80c3d699b":{"from":47,"to":58,"id":"9317fba2-b2d0-47fa-a05f-16a80c3d699b"},"a194f082-ec47-4eaf-acc6-8f54731b1a9f":{"from":47,"to":57,"id":"a194f082-ec47-4eaf-acc6-8f54731b1a9f"},"dba8a393-1729-4e40-a7ec-265b0c869721":{"from":47,"to":56,"id":"dba8a393-1729-4e40-a7ec-265b0c869721"},"bcbc677c-1019-4a70-978b-b979a9bb8d3e":{"from":47,"to":55,"id":"bcbc677c-1019-4a70-978b-b979a9bb8d3e"},"817853cc-100f-4a6c-9457-835ce4e8ad8f":{"from":47,"to":54,"id":"817853cc-100f-4a6c-9457-835ce4e8ad8f"},"cf69f218-8022-460a-b3d8-996678e5106b":{"from":47,"to":53,"id":"cf69f218-8022-460a-b3d8-996678e5106b"},"55dc21c6-c6d5-4c22-9813-da23d1e78c1e":{"from":47,"to":51,"id":"55dc21c6-c6d5-4c22-9813-da23d1e78c1e"},"e0a07784-ba4d-4965-af8d-80e52d8d9357":{"from":46,"to":50,"id":"e0a07784-ba4d-4965-af8d-80e52d8d9357"},"6c588736-4429-4165-ad4e-28acd587aa23":{"from":46,"to":59,"id":"6c588736-4429-4165-ad4e-28acd587aa23"},"cc003f57-bb1a-4b79-be4a-0eb5a8e8325a":{"from":46,"to":58,"id":"cc003f57-bb1a-4b79-be4a-0eb5a8e8325a"},"e60c3e0c-b8c8-401d-b592-2cb61a226b69":{"from":46,"to":57,"id":"e60c3e0c-b8c8-401d-b592-2cb61a226b69"},"de8a9fc0-6f20-40f6-a932-c73d0529fd5b":{"from":46,"to":56,"id":"de8a9fc0-6f20-40f6-a932-c73d0529fd5b"},"42dbaa41-7e15-4927-95ae-aa5e19d26697":{"from":46,"to":55,"id":"42dbaa41-7e15-4927-95ae-aa5e19d26697"},"733bd47c-6e24-4704-bf85-d9df69572d36":{"from":46,"to":54,"id":"733bd47c-6e24-4704-bf85-d9df69572d36"},"772a0af9-109f-48c5-8166-5f693989bda1":{"from":46,"to":53,"id":"772a0af9-109f-48c5-8166-5f693989bda1"},"a4e1c00c-1721-4796-8858-5879dc94f2dc":{"from":46,"to":51,"id":"a4e1c00c-1721-4796-8858-5879dc94f2dc"},"41ef5d7e-cb85-41c5-bba6-f8ced4d1c602":{"from":45,"to":50,"id":"41ef5d7e-cb85-41c5-bba6-f8ced4d1c602"},"e35723b7-675a-4c10-8f32-a666ad927ee9":{"from":45,"to":59,"id":"e35723b7-675a-4c10-8f32-a666ad927ee9"},"fad3cdd0-f11b-4c02-8a27-bdeb6fcf171f":{"from":45,"to":58,"id":"fad3cdd0-f11b-4c02-8a27-bdeb6fcf171f"},"3796e220-4d42-406d-bf0e-bab36f5a31c5":{"from":45,"to":58,"id":"3796e220-4d42-406d-bf0e-bab36f5a31c5"},"692ed6cc-28a4-4ed1-b4dc-a745988690df":{"from":45,"to":57,"id":"692ed6cc-28a4-4ed1-b4dc-a745988690df"},"c0697adf-e609-4386-9d70-9ec58846937e":{"from":45,"to":56,"id":"c0697adf-e609-4386-9d70-9ec58846937e"},"569c3cd8-e95e-4de2-908a-040eb1b3dd7f":{"from":45,"to":55,"id":"569c3cd8-e95e-4de2-908a-040eb1b3dd7f"},"3af7cd4d-2747-4f51-8e2c-4cd19f49b460":{"from":45,"to":54,"id":"3af7cd4d-2747-4f51-8e2c-4cd19f49b460"},"53aadc04-0780-4871-bedb-11fe51407d91":{"from":45,"to":53,"id":"53aadc04-0780-4871-bedb-11fe51407d91"},"41d627b8-835f-4947-8af4-0954ed6c9a54":{"from":45,"to":51,"id":"41d627b8-835f-4947-8af4-0954ed6c9a54"},"0f6cca8f-9986-4415-9e90-47e87264a64a":{"from":50,"to":44,"id":"0f6cca8f-9986-4415-9e90-47e87264a64a"},"b19e80d9-69e2-4682-a608-b8f06ecbbdfb":{"from":59,"to":44,"id":"b19e80d9-69e2-4682-a608-b8f06ecbbdfb"},"550cf742-4d70-4290-818f-10a3e3719d56":{"from":58,"to":44,"id":"550cf742-4d70-4290-818f-10a3e3719d56"},"c67aff52-1716-4b91-8f14-c7b785bbcc5f":{"from":57,"to":44,"id":"c67aff52-1716-4b91-8f14-c7b785bbcc5f"},"c61d50f5-55ac-4b5a-ad8d-abaac7943bad":{"from":57,"to":44,"id":"c61d50f5-55ac-4b5a-ad8d-abaac7943bad"},"947a4e87-5b00-4970-85ca-611ef0892b8b":{"from":56,"to":44,"id":"947a4e87-5b00-4970-85ca-611ef0892b8b"},"ad13741c-baff-459f-bd33-3ff541b9eb72":{"from":55,"to":44,"id":"ad13741c-baff-459f-bd33-3ff541b9eb72"},"480f9e9a-7f02-4baa-8db9-15dedd8f9498":{"from":54,"to":44,"id":"480f9e9a-7f02-4baa-8db9-15dedd8f9498"},"cb7121af-5ff5-4fb1-b893-6a8ba329cbdb":{"from":53,"to":44,"id":"cb7121af-5ff5-4fb1-b893-6a8ba329cbdb"},"2245b6b2-c152-4fa3-be3c-89b2617a36f0":{"from":51,"to":44,"id":"2245b6b2-c152-4fa3-be3c-89b2617a36f0"},"55354f7d-eb64-4098-aa9a-788eaf4c7185":{"from":52,"to":51,"id":"55354f7d-eb64-4098-aa9a-788eaf4c7185"},"cfd89e46-68fd-4c7d-a698-f984d364cb1a":{"from":52,"to":53,"id":"cfd89e46-68fd-4c7d-a698-f984d364cb1a"},"283bba18-4b1c-4192-b2eb-d71978b21cc6":{"from":52,"to":54,"id":"283bba18-4b1c-4192-b2eb-d71978b21cc6"},"723cfe8c-4f0a-47ea-b2dc-aa289edab793":{"from":52,"to":55,"id":"723cfe8c-4f0a-47ea-b2dc-aa289edab793"},"83fc5111-ae60-4865-b815-bca10e9920fb":{"from":52,"to":56,"id":"83fc5111-ae60-4865-b815-bca10e9920fb"},"7c005206-f6a3-4c19-a965-5f2638d5e2a3":{"from":52,"to":57,"id":"7c005206-f6a3-4c19-a965-5f2638d5e2a3"},"80b93237-9a3d-4f5e-839c-e6b073544ff3":{"from":52,"to":58,"id":"80b93237-9a3d-4f5e-839c-e6b073544ff3"},"d0b9253e-2d58-4b96-bbe1-c6e0f84095bc":{"from":52,"to":59,"id":"d0b9253e-2d58-4b96-bbe1-c6e0f84095bc"},"bb412377-c76f-4ffe-a4d2-beb46518afe8":{"from":52,"to":50,"id":"bb412377-c76f-4ffe-a4d2-beb46518afe8"}}');
// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// create a network
var container = document.getElementById('network');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    interaction:{hover:true},
    physics:false,
    manipulation: {
        addNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('operation').innerHTML = "Add Node";
//                document.getElementById('node-id').value = data.id;
            document.getElementById('node-label').value = data.label;
            document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
            document.getElementById('cancelButton').onclick = clearPopUp.bind();
            document.getElementById('network-popUp').style.display = 'block';
        },
        editNode: function (data, callback) {
            // filling in the popup DOM elements
            document.getElementById('operation').innerHTML = "Edit Node";
            document.getElementById('node-label').value = data.label;
            document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
            document.getElementById('cancelButton').onclick = cancelEdit.bind(this,callback);
            document.getElementById('network-popUp').style.display = 'block';
        },
        addEdge: function (data, callback) {
            if (data.from == data.to) {
                var r = confirm("Do you want to connect the node to itself?");
                if (r == true) {
                    callback(data);
                }
            }
            else {
                callback(data);
            }
        }
    },
    nodes:{
//            shape: 'circle'
    }
    ,
    groups:{
        database:{
            shape:'icon',
            icon:{
                face:'FontAwesome',
                code:'\uf1c0',
                size:100,
                color:"#000"
            }
        },
        neuron:{
            size:25,
            shape: 'dot',
            widthConstraint:{
                minimum: 25,
                maximum: 50
            },
            scaling:{
                min: 25,
                max: 25
            },
            label:	undefined

        },
        dataAPI:{
            shape:'image',
            shapeProperties: {
                borderDashes: false, // only for borders
                borderRadius: 6,     // only for box shape
                interpolation: false,  // only for image and circularImage shapes
                useImageSize: true,  // only for image and circularImage shapes
                useBorderWithImage: true  // only for image shape
            },
            color: {
                border: '#000000',
                background: '#262623',
                highlight: {
                    border: '#262623',
                    background: '#000000'
                },
                hover: {
                    border: '#262623',
                    background: '#000000'
                }
            }
        },
        inputHandler:{
            shape:'box',
            font:{
                size:40
            },
            size:100
        },
        container:{
            shape:'square',
            color: {
                background:'rgba(255,255,255,0)',
                border:'#FF9800',
                highlight:{
                    background:'rgba(255,255,255,0)',
                    border:'#FF9800'
                },
                hover:{
                    background:'rgba(255,255,255,0)',
                    border:'#FF9800'
                }
            }
        }
    },
    edges: {
        smooth: {
            type: 'continuous',
            roundness: 1
        },
        color: {
            color:'#848484',
            highlight:'#92ff47',
            hover: '#848484',
            inherit: false,
            opacity:1
        },
        width: 3
    }

};
function clearPopUp() {
    document.getElementById('saveButton').onclick = null;
    document.getElementById('cancelButton').onclick = null;
    document.getElementById('network-popUp').style.display = 'none';
}

function cancelEdit(callback) {
    clearPopUp();
    callback(null);
}

function saveData(data,callback) {
    data.label = document.getElementById('node-label').value;
    data.group = document.getElementById('node-type').value;
    clearPopUp();
    console.log("Data:");
    console.log(data);
    callback(data);
}
data = loadData()? loadData(): data;
var network = new vis.Network(container, data, options);
//    var graph = new vis.Graph2d(container,new vis.DataSet([
//        {x: '2014-06-11', y: 10},
//        {x: '2014-06-12', y: 25},
//        {x: '2014-06-13', y: 30},
//        {x: '2014-06-14', y: 10},
//        {x: '2014-06-15', y: 15},
//        {x: '2014-06-16', y: 30}
//    ]),{
//        start: '2014-06-10',
//        end: '2014-06-18'
//    });

network.on("click", function (params) {
//        params.event = "[original event]";
//        if(params.nodes){
//            document.getElementById('myModal').style.display = "block";
//            var network = new vis.Network(document.getElementById("node-network"), data, options);
//        }
//        document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
    console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
});
network.on("doubleClick", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("oncontext", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragStart", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragging", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragEnd", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("zoom", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("showPopup", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
});
network.on("hidePopup", function () {
    console.log('hidePopup Event');
});
network.on("select", function (params) {
    console.log('select Event:', params);
});
network.on("selectNode", function (params) {
    console.log('selectNode Event:', params);
});
network.on("selectEdge", function (params) {
    console.log('selectEdge Event:', params);
});
network.on("deselectNode", function (params) {
    console.log('deselectNode Event:', params);
});
network.on("deselectEdge", function (params) {
    console.log('deselectEdge Event:', params);
});
network.on("hoverNode", function (params) {
    console.log('hoverNode Event:', params);
});
network.on("hoverEdge", function (params) {
    console.log('hoverEdge Event:', params);
});
network.on("blurNode", function (params) {
    console.log('blurNode Event:', params);
});
network.on("blurEdge", function (params) {
    console.log('blurEdge Event:', params);
});

network.on("startStabilizing", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h3>Starting Stabilization</h3>';
    console.log("started")
});
network.on("stabilizationProgress", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h3>Stabilization progress</h3>' + JSON.stringify(params, null, 4);
    console.log("progress:",params);
});
network.on("stabilizationIterationsDone", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h3>Stabilization iterations complete</h3>';
    console.log("finished stabilization interations");
});
network.on("stabilized", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h3>Stabilized!</h3>' + JSON.stringify(params, null, 4);
    console.log("stabilized!", params);
});
function addNode(group,size) {
    try {
        data.nodes.add({
            id:data.nodes.length+2,
            group:group?group:"neuron",
            size:size?size:25
        });
        console.log(data.nodes);
    }
    catch (err) {
        alert(err);
    }
}
function updateNode() {
    try {
        nodes.update({
            id: document.getElementById('node-id').value,
            label: document.getElementById('node-label').value
        });
    }
    catch (err) {
        alert(err);
    }
}
function removeNode() {
    try {
        nodes.remove({id: document.getElementById('node-id').value});
    }
    catch (err) {
        alert(err);
    }
}

function addEdge() {
    try {
        edges.add({
            id: document.getElementById('edge-id').value,
            from: document.getElementById('edge-from').value,
            to: document.getElementById('edge-to').value
        });
    }
    catch (err) {
        alert(err);
    }
}
function updateEdge() {
    try {
        edges.update({
            id: document.getElementById('edge-id').value,
            from: document.getElementById('edge-from').value,
            to: document.getElementById('edge-to').value
        });
    }
    catch (err) {
        alert(err);
    }
}
function removeEdge() {
    try {
        edges.remove({id: document.getElementById('edge-id').value});
    }
    catch (err) {
        alert(err);
    }
}
function undoNode(){
    try{
        nodes.remove({id:nodes.length});
    }
    catch (err){
        alert(err);
    }
}
function objectToArray(obj,pos) {
    return Object.keys(obj).map(function (key) {
        obj[key].id = key;
        obj[key].x = pos[key].x;
        obj[key].y = pos[key].y;
        console.log(obj[key]);
        return obj[key];
    });
}
//    save node and edge to local storage
function save(){
    var nodes = objectToArray(network.body.data.nodes._data,network.getPositions());
    localStorage.setItem('nodes', JSON.stringify(nodes));
    localStorage.setItem('edges', JSON.stringify(network.body.data.edges._data));
}
//    parsing json to edge array
function jsonToEdge(edges) {
    var newEdge =[];
    Object.keys(edges).map(function (key) {
        newEdge.push({from: edges[key].from, to: edges[key].to});
    });
    console.log(newEdge);
    return newEdge;
}
// Load data from local storage
function loadData() {
    if(!localStorage.getItem('nodes')){ return null;}
    var nodesData =JSON.parse(localStorage.getItem('nodes'));
    console.log(typeof JSON.parse(localStorage.getItem('edges')));
    var edgesData = JSON.parse(localStorage.getItem('edges'));
    return {
        nodes: new vis.DataSet(nodesData),
        edges: new vis.DataSet(jsonToEdge(edgesData))
    };
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close").onclick = function() {
    document.getElementById('myModal').style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
};

// animated edge
function updateEdgeDashes() {
    let edges = network.body.edges;
    let dash = [[0,0,2,5],[0,1,2,5],[0,2,4,7]];

    Object.keys(edges).map(function (key) {
        edges[key].options.dashI = edges[key].options.dashI?edges[key].options.dashI : 0;
        if(edges[key].from.options.group === "database"){
            edges[key].options.dashes = dash[ edges[key].options.dashI];
            edges[key].options.dashI +=1;
            edges[key].options.dashI %=dash.length;
            // console.log(edges[key].options.dashes);
        }

    });
    network.redraw();
    setTimeout(updateEdgeDashes,250);
}
function changeEdgesColor() {
    let edges = network.body.edges;
    Object.keys(edges).map(function (key) {
        edges[key].options.color.color='#ff0000';

        console.log(edges[key].options.color);
    });
    network.redraw();
}
var run = true;
function changeEdgeSelected() {
    let edges = network.body.edges;
    Object.keys(edges).map(function (key) {
        console.log(edges[key].from.grouplist.options.group);
        if(edges[key].from.options.group === "neuron")
            edges[key].selected = Math.floor(Math.random() * 6) + 1 < 4;
    });
    network.redraw();
    if(run)setTimeout(changeEdgeSelected, 1000);
}
function runn() {
    setTimeout(changeEdgeSelected,1000);
    setTimeout(updateEdgeDashes,250);
}
network.on("beforeDrawing", function (ctx) {
    setTimeout(function () {
        // updateEdgeDashes();
    },500);

});
network.on("afterDrawing", function (ctx) {
    setTimeout(function () {
        // updateEdgeDashes();
    },500);
});
