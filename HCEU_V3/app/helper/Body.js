
function cuerpo(x){
 
let nodoRaiz= `<?xml version="1.0" encoding="UTF-8"?>
<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" classCode="DOCCLIN" moodCode="EVN" xsi:schemaLocation="urn:hl7-org:v3 /Users/jaimeramirez/Documents/HL7/V3/schemas/HL7-CDA/CDA.xsd">
 <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
 <id extension="a2fe1aae-6b88-4273-b7b9-276d91a84b06" root="2.16.170.11001.1000.1.302.20220707102109.595159.1"/>
 <code code="18682-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Ambulance Records"/>
 <title>${x.title}</title>
 <effectiveTime value="${x.effectiveTime}"/>
 <confidentialityCode code="V" codeSystem="2.16.840.1.113883.5.25"/>
 <languageCode code="es-CO"/>
  <setId root="2.16.170.11001.1000.1" extension="302.20220707102109.595159.1"/>
  <versionNumber value="1"/>
   <recordTarget>
      <patientRole>
         <id extension="6082902" root="2.16.170.11001.1000.2.1" />
         <patient>`;
         nodoRaiz+=`<id extension="${x.recordTarget.patientRole.patient.id.extension}" root="${x.recordTarget.patientRole.patient.id.root}"/>
         <name>
         <given>${x.recordTarget.patientRole.patient.name.given[0]}</given>`;
 
         //Nombres del Paciente el Primer nombre y apellido es obligatorio
 
         if(x.recordTarget.patientRole.patient.name.given[1])
         { nodoRaiz+=`<given>${x.recordTarget.patientRole.patient.name.given[1]}</given> <family>${x.recordTarget.patientRole.patient.name.family[0]}</family>`; }
         
         if(x.recordTarget.patientRole.patient.name.family[1]){
         nodoRaiz+=`<family>${x.recordTarget.patientRole.patient.name.family[1]}</family>`;
         }


nodoRaiz+=`</name><administrativeGenderCode code="${x.recordTarget.patientRole.patient.administrativeGenderCode.code}" displayName="${x.recordTarget.patientRole.patient.administrativeGenderCode.displayName}" />
            <birthTime value="${x.recordTarget.patientRole.patient.birthTime}" />
            <maritalStatusCode code="${x.recordTarget.patientRole.patient.maritalStatusCode.code}" codeSystem="2.16.170.11001.1000.12.3" codeSystemName="Estado Civil" displayName="${x.recordTarget.patientRole.patient.maritalStatusCode.displayName}" />
         </patient>
         <providerOrganization classCode="ORG" determinerCode="INSTANCE">
            <id root="${x.recordTarget.patientRole.providerOrganization.id.root}" extension="${x.recordTarget.patientRole.providerOrganization.id.extension}" />
            <name>${x.recordTarget.patientRole.providerOrganization.name}</name>
         </providerOrganization>
      </patientRole>
   </recordTarget>
   <author typeCode="AUT" contextControlCode="OP">
      <time value="${x.author.time}" />
      <assignedAuthor>
         <id extension="${x.author.assignedAuthor.id.extension}" root="${x.author.assignedAuthor.id.root}" />
         <assignedPerson classCode="PSN" determinerCode="INSTANCE">
            <name>
               <given>${x.author.assignedAuthor.assignedPerson.name.given}</given>
               <family>${x.author.assignedAuthor.assignedPerson.name.family}</family>
               <prefix>${x.author.assignedAuthor.assignedPerson.name.prefix}</prefix>
            </name>
         </assignedPerson>
         <representedOrganization classCode="ORG" determinerCode="INSTANCE">
            <id root="${x.author.assignedAuthor.representedOrganization.id.root}" extension="${x.author.assignedAuthor.representedOrganization.id.extension}" />
         </representedOrganization>
      </assignedAuthor>
   </author>
   <custodian>
      <assignedCustodian>
         <representedCustodianOrganization>
            <id root="${x.custodian.assignedCustodian.representedCustodianOrganization.id.root}" />
            <name>${x.custodian.assignedCustodian.representedCustodianOrganization.name}</name>
         </representedCustodianOrganization>
      </assignedCustodian>
   </custodian>
   <documentationOf typeCode="DOC">
      <realmCode code="501" />
      <serviceEvent classCode="ACT" moodCode="EVN">
         <code code="${x.documentationOf.serviceEvent.code.code}" codeSystem="2.16.170.11001.1000.12.1" codeSystemName="CUPS" displayName="${x.documentationOf.serviceEvent.code.displayName}" />
      </serviceEvent>
   </documentationOf>
   <componentOf typeCode="COMP">
      <encompassingEncounter moodCode="EVN">
         <code code="${x.componentOf.encompassingEncounter.code.code}" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Place of service" />
         <effectiveTime value="${x.componentOf.encompassingEncounter.effectiveTime}" />
         <location typeCode="LOC">
            <healthCareFacility classCode="ISDLOC">
               <code code="${x.componentOf.encompassingEncounter.location.healthCareFacility.code.code}" displayName="${x.componentOf.encompassingEncounter.location.healthCareFacility.code.displayName}" />
               <serviceProviderOrganization>
                  <standardIndustryClassCode code="${x.componentOf.encompassingEncounter.location.healthCareFacility.serviceProviderOrganization.standardIndustryClassCode.code}" displayName="${x.componentOf.encompassingEncounter.location.healthCareFacility.serviceProviderOrganization.standardIndustryClassCode.displayName}" />
               </serviceProviderOrganization>
            </healthCareFacility>
         </location>
      </encompassingEncounter>
   </componentOf>
   <component>
      <structuredBody>
         <component>
            <section>
               <code codeSystem="${x.component.structuredBody.component[0].section.code.codeSystem}" codeSystemName="LOINC" code="${x.component.structuredBody.component[0].section.code.code}" displayName="${x.component.structuredBody.component[0].section.code.displayName}" />
               <title>${x.component.structuredBody.component[0].section.title}</title>
               <text>
                  <list listType="ordered">
                     <item>${x.component.structuredBody.component[0].section.text.list.item[0]}</item>
                     <item>${x.component.structuredBody.component[0].section.text.list.item[1]}</item>
                  </list>
               </text>
            </section>
         </component>
         <component typeCode="COMP" contextConductionInd="true">
            <section classCode="DOCSECT" moodCode="EVN">
               <title>EDAD PACIENTE</title>
               <text>
                  <list listType="ordered">
                     <item>${x.component.structuredBody.component[1].section.text.list.item}</item>
                  </list>
               </text>
               <entry typeCode="COMP">
                  <observation classCode="OBS" moodCode="EVN">
                     <code code="${x.component.structuredBody.component[1].section.entry.observation.code.code}" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Age" />
                     <value xsi:type="PQ" value="${x.component.structuredBody.component[1].section.entry.observation.value[0].value}" unit="Y" />
                     <value xsi:type="PQ" value="${x.component.structuredBody.component[1].section.entry.observation.value[1].value}" unit="M" />
                     <value xsi:type="PQ" value="${x.component.structuredBody.component[1].section.entry.observation.value[2].value}" unit="D" />
                  </observation>
               </entry>
            </section>
         </component>
         <component contextConductionInd="true" typeCode="COMP">
            <section classCode="DOCSECT" moodCode="EVN">
               <text>
                  <list listType="ordered">
                     <item>${x.component.structuredBody.component[2].section.text.list.item[0]}</item>
                     <item>${x.component.structuredBody.component[2].section.text.list.item[1]}</item>
                     <item>${x.component.structuredBody.component[2].section.text.list.item[2]}</item>
                     <item>${x.component.structuredBody.component[2].section.text.list.item[3]}</item>
                     <item>${x.component.structuredBody.component[2].section.text.list.item[4]}</item>
                     <item>${x.component.structuredBody.component[2].section.text.list.item[5]}</item>
                     <item>${x.component.structuredBody.component[2].section.text.list.item[6]}</item>
                     <item>${x.component.structuredBody.component[2].section.text.list.item[7]}</item>
                  </list>
               </text>
               <entry>
                  <act classCode="INFRM" moodCode="DEF">
                     <code code="${x.component.structuredBody.component[2].section.entry.act.code.code}" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Payment Sources" />
                     <entryRelationship typeCode="COMP" contextConductionInd="true">
                        <observation classCode="OBS" moodCode="DEF">
                           <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[0].observation.code.code}" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="What kind of health insurance or health care coverage do you have" />
                           <performer typeCode="PRF">
                              <assignedEntity classCode="ASSIGNED">
                                 <id extension="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[0].observation.performer.assignedEntity.id.extension}" />
                                 <representedOrganization classCode="ORG">
                                    <name>${x.component.structuredBody.component[2].section.entry.act.entryRelationship[0].observation.performer.assignedEntity.representedOrganization.name}</name>
                                 </representedOrganization>
                              </assignedEntity>
                           </performer>
                           <participant typeCode="COV">
                              <participantRole classCode="CAREGIVER">
                                 <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[0].observation.participant.participantRole.code["@code"]}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[0].observation.participant.participantRole.code["@displayName"]}" />
                              </participantRole>
                           </participant>
                        </observation>
                     </entryRelationship>
                     <entryRelationship typeCode="COMP">
                        <observation classCode="OBS" moodCode="EVN">
                           <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[1].observation.code.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[1].observation.code.displayName}" />
                           <value xsi:type="CD" code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[1].observation.value.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[1].observation.value.displayName}" />
                        </observation>
                     </entryRelationship>
                     <entryRelationship typeCode="COMP">
                        <observation classCode="OBS" moodCode="EVN">
                           <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[2].observation.code.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[2].observation.code.displayName}" />
                           <value xsi:type="CD" code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[2].observation.value.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[2].observation.value.displayName}" />
                        </observation>
                     </entryRelationship>
                     <entryRelationship typeCode="COMP">
                        <observation classCode="OBS" moodCode="EVN">
                           <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[3].observation.code.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[3].observation.code.displayName}" />
                           <value xsi:type="CD" code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[3].observation.value.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[3].observation.value.displayName}" />
                        </observation>
                     </entryRelationship>
                     <entryRelationship typeCode="COMP">
                        <observation classCode="OBS" moodCode="EVN">
                           <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[4].observation.code.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[4].observation.code.displayName}" />
                           <value xsi:type="CD" code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[4].observation.value.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[4].observation.value.displayName}" />
                        </observation>
                     </entryRelationship>
                     <entryRelationship typeCode="COMP">
                        <observation classCode="OBS" moodCode="EVN">
                           <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[5].observation.code.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[5].observation.code.displayName}" />
                           <value xsi:type="CD" code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[5].observation.value.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[5].observation.value.displayName}" />
                        </observation>
                     </entryRelationship>
                     <entryRelationship typeCode="COMP">
                        <observation classCode="OBS" moodCode="EVN">
                           <code code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[6].observation.code.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[6].observation.code.displayName}" />
                           <value xsi:type="CD" code="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[6].observation.value.code}" displayName="${x.component.structuredBody.component[2].section.entry.act.entryRelationship[6].observation.value.displayName}" />
                        </observation>
                     </entryRelationship>
                  </act>
               </entry>
            </section>
         </component>
      </structuredBody>
   </component>
</ClinicalDocument>`;


return nodoRaiz;

}

module.exports.cuerpo = cuerpo;  