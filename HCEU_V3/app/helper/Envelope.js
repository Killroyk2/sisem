

function sobre(x,base64xml){

//Nodo Raiz 4.1//Cardinalidad 1..1


var nodoRaiz=`<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">
<s:Header>
  <a:Action s:mustUnderstand="1">urn:ihe:iti:2007:ProvideAndRegisterDocumentSet-b</a:Action>
  <a:MessageID>urn:uuid:2ce84652-5a08-4802-a950-e42e72e021c4</a:MessageID>
  <a:ReplyTo>
    <a:Address>http://www.w3.org/2005/08/addressing/anonymous</a:Address>
  </a:ReplyTo>
  <a:To s:mustUnderstand="1">http://localhost:2647/XdsService/IHEXDSRegistry.svc</a:To>
</s:Header>
<s:Body>
  <ProvideAndRegisterDocumentSetRequest
    xmlns="urn:ihe:iti:xds-b:2007"
    xmlns:lcm="urn:oasis:names:tc:ebxml-regrep:xsd:lcm:3.0"
    xmlns:rim="urn:oasis:names:tc:ebxml-regrep:xsd:rim:3.0"
    xmlns:rs="urn:oasis:names:tc:ebxml-regrep:xsd:rs:3.0"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ihe:iti:xds-b:2007 ../../schema/IHE/XDS.b_DocumentRepository.xsd">
    <lcm:SubmitObjectsRequest xsi:schemaLocation="urn:oasis:names:tc:ebxml-regrep:xsd:lcm:3.0 ../../schema/ebRS/lcm.xsd">
      <rim:RegistryObjectList>
        <rim:ExtrinsicObject id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].classifiedObject}" mimeType="application/hl7-v3+xml" objectType="urn:uuid:7edca82f-054d-47f2-a032-9b2a5b5186c1" status="urn:oasis:names:tc:ebxml-regrep:StatusType:Approved">
          <rim:Slot name="creationTime">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Slot[0].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Slot name="languageCode">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Slot[1].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Slot name="serviceStartTime">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Slot[2].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Slot name="serviceStopTime">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Slot[3].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Slot name="sourcePatientId">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Slot[4].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Slot name="repositoryUniqueId">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Slot[5].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Name>
            <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Name.LocalizedString.value}"/>
          </rim:Name>
          <rim:Description/>
          <rim:Classification classificationScheme="urn:uuid:93606bcf-9494-43ec-9b4e-a7748d1a838d" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[0].classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[0].id}">
            <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[0].Slot.name}">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[0].Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
          </rim:Classification>
          <rim:Classification classificationScheme="urn:uuid:41a5887f-8865-4c09-adf7-e362475b143a" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[1].classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[1].id}" nodeRepresentation="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[1].nodeRepresentation}">
            <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[1].Slot.name}">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[1].Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
            <rim:Name>
              <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[1].Name.LocalizedString.value}"/>
            </rim:Name>
          </rim:Classification>
          <rim:Classification classificationScheme="urn:uuid:f4f85eac-e6cb-4883-b524-f2705394840f" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[2].classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[2].id}" nodeRepresentation="V">
            <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[2].Slot.name}">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[2].Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
            <rim:Name><rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[2].Name.LocalizedString.value}"/></rim:Name>
          </rim:Classification>
          <rim:Classification classificationScheme="urn:uuid:a09d5840-386c-46f2-b5ad-9c3699a4309d" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[3].classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[3].id}" nodeRepresentation="urn:ihe:pcc:xphr:2007">
            <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[3].Slot.name}">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[3].Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
            <rim:Name><rim:LocalizedString value="urn:ihe:pcc:xphr:2007"/></rim:Name>
          </rim:Classification>
          <rim:Classification classificationScheme="urn:uuid:f33fb8ac-18af-42cc-ae0e-ed0b0bdb91e1" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[4].classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[4].id}" nodeRepresentation="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[4].nodeRepresentation}">
            <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[4].Slot.name}">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[4].Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
            <rim:Name>
              <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[4].Name.LocalizedString.value}"/>
            </rim:Name>
          </rim:Classification>
          <rim:Classification classificationScheme="urn:uuid:cccf5598-8b07-4b77-a05e-ae952c785ead" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].id}" nodeRepresentation="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].nodeRepresentation}">
            <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].Slot.name}">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
            <rim:Name>
              <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].Name.LocalizedString.value}"/>
            </rim:Name>
          </rim:Classification>
          <rim:Classification classificationScheme="urn:uuid:f0306f51-975f-434e-a61c-c59651d33983" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[6].classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[6].id}" nodeRepresentation="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[6].nodeRepresentation}">
            <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[6].Slot.name}">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[6].Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
            <rim:Name>
              <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[6].Name.LocalizedString.value}"/>
            </rim:Name>
          </rim:Classification>
          <rim:ExternalIdentifier id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.ExternalIdentifier[0].id}" identificationScheme="urn:uuid:58a6f841-87b3-4a3e-92fd-a8ffeff98427" registryObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.ExternalIdentifier[0].registryObject}" value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.ExternalIdentifier[0].value}">
            <rim:Name>
              <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.ExternalIdentifier[0].Name.LocalizedString.value}"/>
            </rim:Name>
          </rim:ExternalIdentifier>
          <rim:ExternalIdentifier id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.ExternalIdentifier[1].id}" identificationScheme="urn:uuid:2e82c1f6-a085-4c72-9da3-8640a32e42ab" registryObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.ExternalIdentifier[1].registryObject}" value="a2fe1aae-6b88-4273-b7b9-276d91a84b06">
            <rim:Name><rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.ExternalIdentifier[1].Name.LocalizedString.value}"/></rim:Name>
          </rim:ExternalIdentifier>
        </rim:ExtrinsicObject>
        <rim:RegistryPackage id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Classification.classifiedObject}">
          <rim:Slot name="submissionTime">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Slot[0].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Slot[1].name}">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Slot[1].ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
          <rim:Name><rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Name.LocalizedString.value}"/></rim:Name>
          <rim:Description><rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Description.LocalizedString.value}"/></rim:Description>
          <rim:Classification classificationScheme="urn:uuid:aa543740-bdda-424e-8c96-df4873be8500" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Classification.classifiedObject}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Classification.id}" nodeRepresentation="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Classification.nodeRepresentation}">
            <rim:Slot name="codingScheme">
              <rim:ValueList>
                <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.Classification.Slot.ValueList.Value}</rim:Value>
              </rim:ValueList>
            </rim:Slot>
            <rim:Name><rim:LocalizedString value="History and Physical"/></rim:Name>
          </rim:Classification>
          <rim:ExternalIdentifier id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[0].id}" identificationScheme="urn:uuid:96fdda7c-d067-4183-912e-bf5ee74998a8" registryObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Classification.classifiedObject}" value="a2fe1aae-6b88-4273-b7b9-276d91a84b06">
            <rim:Name><rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[0].Name.LocalizedString.value}"/></rim:Name>
          </rim:ExternalIdentifier>
          <rim:ExternalIdentifier id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[1].id}" identificationScheme="urn:uuid:554ac39e-e3fe-47fe-b233-965d2a147832" registryObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Classification.classifiedObject}" value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[1].value}">
            <rim:Name>
              <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[1].id}"/>
            </rim:Name>
          </rim:ExternalIdentifier>
          <rim:ExternalIdentifier id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[2].id}" identificationScheme="urn:uuid:6b5aea1a-874d-4603-a4bc-96a0a7b38446" registryObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Classification.classifiedObject}" value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[2].value}">
            <rim:Name>
              <rim:LocalizedString value="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.RegistryPackage.ExternalIdentifier[2].Name.LocalizedString.value}"/>
            </rim:Name>
          </rim:ExternalIdentifier>
        </rim:RegistryPackage>
        <rim:Classification classificationNode="urn:uuid:a54d6aa5-d40d-43f9-88c5-b4633d873bdd" classifiedObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Classification.classifiedObject}" id="x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Classification.id"/>
        <rim:Association associationType="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Association.associationType}" id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Association.id}" sourceObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Association.sourceObject}" targetObject="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Association.targetObject}">
          <rim:Slot name="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Association.Slot.name}">
            <rim:ValueList>
              <rim:Value>${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.Association.Slot.ValueList.Value}</rim:Value>
            </rim:ValueList>
          </rim:Slot>
        </rim:Association>
      </rim:RegistryObjectList>
    </lcm:SubmitObjectsRequest>
    <Document id="${x.ProvideAndRegisterDocumentSetRequest.SubmitObjectsRequest.RegistryObjectList.ExtrinsicObject.Classification[5].classifiedObject}">${base64xml}</Document>
  </ProvideAndRegisterDocumentSetRequest>
</s:Body>
</s:Envelope>`;


nodoRaiz= nodoRaiz.replace(/(\r\n|\n|\r)/gm,"");
return nodoRaiz;  

}

//exports the function cda to be used in other files
module.exports.sobre = sobre;