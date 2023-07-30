"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion';

import { FaRegCheckCircle, FaRegSmile } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"



export default function Home() {
  return (
    <main className="">
      <div className=" lg:h-[620px] md:h-[450px] pt-10 sm:h-[650px] h-[800px] relative gradient_style ">
        <div className=" px-6 lg:px-16 md:px-10  h-full pt-[40px] w-full ">
          <div className="relative z-40  ">
            <div className='grid grid-cols-1 md:grid-cols-2'>

              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="text-start max-w-[900px] text-white grid gap-y-4"
                key={1}
              >
                <h2 className=' md:text-[18px] bg-[hsla(45,44%,96%,.1)] md:py-[12px] md:px-[30px] py-2 px-5 rounded-full uppercase ' >SOUS LE PATRONNAGE DE SON EXCELLENCE LE MINISTRE DE LA SANTÉ PUBLIQUE</h2>
                <h2 className=' font-bold md:text-[18px] my-2 md:px-[30px] text-center px-2'>VIIieme CONGRES ANNUEL</h2>
                <p className=' font-bold md:text-[1.4rem] md:px-[30px] text-center' >de la SOCIETE CAMEROUNAISE DE CHIRURGIE ORTHOPEDIQUE ET TRAUMATOLOGIQUE & 1er ateliers de bone-work ASCOVIM - [COT]2
                </p>
                <div>
                  <div className='text-center'> <span className='text-sm' >ASCOVIM = Association des Compétances pour une Vie Meilleure</span> </div>
                  <div className='text-center'><span className='text-sm leading-[15px] text-center'  >[COT]2 = Center for Continuous Opérative Orthopedic and Trauma Training</span></div>   </div>

              </motion.div>


              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="h-full flex flex-col justify-center text-center gap-y-4 px-10 mt-5 md:mt-0"
                key={2}
              >
                <div className='font-bold bg-[#E20C16]/70 p-2 rounded' >
                  <p className='text-yellow-500 font-bold underline'>INSCRIPTIONS</p>
                  <p className=' text-white'><span>Chirurgiens:</span> <span>75 000 frs</span> <span>Spécialistes:</span> <span>50 000 frs</span>
                    <span>Residents, Médecins généralistes</span> <span>35 000 frs</span>
                  </p>     </div>
                <div className='font-bold bg-[#FAD008]/70 p-2 rounded text-black/70' >
                  <p>Date limite de soumission des abstracts:</p>
                  <p>01 juillet 2023</p>

                </div>
              </motion.div>

            </div>



          </div>
        </div>
        <div className="afterImage " ><img src="assets/images/media/bg7.263dd148ef050cd0d81a0c5506384a76.png" alt="" /> </div>


      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <section className="content-inner-2" id='about'>
          <div className="px-6 lg:px-16 md:px-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 ">
              <div className="section-head style-3 wow fadeInUp" data-wow-duration="2s"
                data-wow-delay="0.2s">
                <h6 className="sub-title_section  mb-[15px]">DOUBLE THEMATIQUE</h6>
              </div>


              <div className="icon-bx-wraper style-3 mb-[30px] box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title mb-[10px]">Chirurgie articulaire et Arthroplastie en
                    milieu défavorisé : actualités et perspectives</h4>
                </div>
              </div>
              <div className="icon-bx-wraper style-3 mb-[30px] relative box-hover wow fadeInUp active text-white">
                <div className="icon-bx-sm radius bgl-white"><a className="icon-cell"
                  href="index.html#"><i className="flaticon-pie-charts"></i></a></div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title mb-[10px]">Ostéosynthèse en milieu défavorisé :
                    pratiques actuelles et perspectives</h4>

                </div>
              </div>



            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <section className="content-inner-2 mpt-[100px]" id='calender'
        >
          <div className="px-6 lg:px-16 md:px-10 ">
            <div className="mb-[40px] style-3  style-3 text-center flex flex-col items-center">
              <h6 className="sub-title_section  mb-[15px] max-w-[700px]">AVANT-PROGRAMME DÉFINITIF/PROGRAMME POUR IBODE INFIRMIÈRE DE BLOC OPÉRATOIRE DIPLOMÉS D&#39;ETATI</h6>
              <h2 className="title max-w-[900px] ">6 Sessions de communication, 2 tables rondes, 2 conférences, 6 ateliers d&#39;ostéosynthèse pratiques sur os artificiels</h2>
              <Tabs defaultValue="thursday" className="max-w-[700px] mt-5 p-2">
                <TabsList className='flex-wrap'>
                  <TabsTrigger value="thursday">JEUDI 3 AOUT</TabsTrigger>
                  <TabsTrigger value="friday">VENDREDI 4 AOUT</TabsTrigger>
                  <TabsTrigger value="saturday">SAMEDI 5 AOUT</TabsTrigger>
                </TabsList>
                <TabsContent value="thursday" className='pt-4'>

                  <div className='p-4 text-black/60 text-start '>
                    <p className='text-start font-bold' >JEUDI 3 AOUT</p>
                    <Separator />
                    <div className='flex flex-col gap-y-2'>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >8h00-9h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold max-w-[500px] mb-2 text-[13px] ' >FIXATION EXTERNE DES
                            FRACTURES DIAPHYSAIRES DE JAMBE</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Atelier N°1 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Coaching: Sénégal (SNG) / Cameroun (CMR)</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >9h30-10h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>

                        </div>
                      </div>
                      <div className='flex  '>
                        <div className='w-[25%]'>
                          <p className='font-bold' >8h00-9h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px]' >FIXATION EXTERNE DES
                            FRACTURES DIAPHYSAIRES DU FEMUR</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Atelier N°2 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Coaching: Burkina Fasso (BF)/Cameroun (CMR)</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >11h30- 13h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px]' >ECM A FROTEMENT DUR DES
                            FRACTURES DIAPHYSAIRES DE JAMBE</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Atelier N°3 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Coaching: Tchad-RCA/Cameroun</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >13h00-14h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >14h30-16h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px]' >ECM A FROTEMENT DUR DES
                            FRACTURES DIAPHYSAIRES DU FEMUR</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Atelier N°4 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Coaching: Gabon-Congo (GB-CG)/Cameroun (CMR)</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >16h00 - 17h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px]' >PLAQUAQGE VISSE DES
                            FRACTURES DIAPHYSAIRES DE L&#39;AVANT-BRAS</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Atelier N°5 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Coaching : Côte d&#39;Ivoire (CI)/Cameroun (CMR)</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >17h30-18h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >18h00-19h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px]' >PLAQUAQGE VISSE DES
                            FRACTURES DIAPHYSAIRES DE L&#39;HUMERUS</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Atelier N°3 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Coaching: RCA-Thad (T)/Cameroun (CMR)</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >19h30-xx</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >SOIREE LIBRE</p>
                        </div>
                      </div>

                    </div>

                  </div>

                </TabsContent>
                <TabsContent value="friday">
                  <div className='p-4 text-black/60 text-start'>
                    <p className='text-start font-bold' >VENDREDI 4 AOUT</p>
                    <Separator />
                    <div className='flex flex-col gap-y-2'>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >8h00-9h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold max-w-[500px] mb-2 text-[13px] uppercase ' >Traumatologie du membre Les complications de la prophylaxie tromboembollque</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>SESSION DE COMMUNICATIONS LIBRES N°1</span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Chair: Côte d&#39;Ivoire / Cameroun</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >9h30-10h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>

                        </div>
                      </div>
                      <div className='flex  '>
                        <div className='w-[25%]'>
                          <p className='font-bold' >8h00-9h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <div className='w-[75%]'>
                            <p className='font-bold max-w-[500px] mb-2 text-[13px] uppercase ' >Traumatologie
                              du membre inférieur 1</p>
                            <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>SESSION DE COMMUNICATIONS LIBRES N°2</span>
                            <p className='text-[#0B448D] text-sm mt-3'>
                              Chair: Sénégal / Cameroun</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >11h30- 13h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold max-w-[500px] mb-2 text-[13px] uppercase ' >Traumatologie
                            du membre inférieur 2</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>SESSION DE COMMUNICATIONS LIBRES N°3</span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Chair: Côte d&#39;Ivoire / Cameroun</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >13h00-14h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >14h30-16h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px] uppercase' >Dégénérescences de la hanche: Indications & traitements</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Conférence - Table ronde N°1 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Conférencier: Cameroun</p>
                          <p className='text-[#066A52] text-sm '>
                            Panelistes: SN+ C + GB + GB</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >16h00 - 17h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px] uppercase' >Dégénérescences du genou: indications & traitements</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Conférence - Table ronde N°2 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Conférencier: Sénégal</p>
                          <p className='text-[#066A52] text-sm '>
                            Panelistes: CMR + CI+GB+GB+TG+BN</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >17h30-18h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >18h00-19h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px] uppercase' >Dégénérescences de la colonne lombosacrée</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Conférence - Table ronde N°3 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Conférencler: Cote d&#39;Ivoire</p>
                          <p className='text-[#066A52] text-sm '>
                            Panelistes: Cmr + CI+GB+GB+GB+TG + BN</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >19h30-xx</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >SOIREE LIBRE</p>
                        </div>
                      </div>

                    </div>

                  </div></TabsContent>
                <TabsContent value="saturday">

                  <div className='p-4 text-black/60 text-start'>
                    <p className='text-start font-bold' >SAMEDI 5 AOUT</p>
                    <Separator />
                    <div className='flex flex-col gap-y-2'>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >8h00-9h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold  mb-2 text-[13px] uppercase' >Les complications de la prophylaxie tromboembollque</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Conférence - Table ronde N°4 </span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Conférencler: Gabon-Congo</p>
                          <p className='text-[#066A52] text-sm '>
                            Panelistes : CMR + CI+GB+GB+GB+TG+SN</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >9h30-10h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>

                        </div>
                      </div>
                      <div className='flex  '>
                        <div className='w-[25%]'>
                          <p className='font-bold' >8h00-9h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <div className='w-[75%]'>
                            <p className='font-bold  mb-2 text-[13px] uppercase' >Antalgle, antiblothéraple, opération en tromato thérapie</p>
                            <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>Conférence - Table ronde N°4 </span>
                            <p className='text-[#0B448D] text-sm mt-3'>
                              Conférencier: RCA - Tchad</p>
                            <p className='text-[#066A52] text-sm '>
                              Panelistes: Cmr + CI+ GB +GB+ GA + TG + BN</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >11h30- 13h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold max-w-[500px] mb-2 text-[13px] uppercase ' >Traumatologie ortho. pédiatrique</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>SESSION DE COMMUNICATIONS LIBRES N°4</span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Chair: Burkina Fasso / Cameroun</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >13h00-14h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >14h30-16h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold max-w-[500px] mb-2 text-[13px] uppercase ' >Orthopédie froide adulte</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>SESSION DE COMMUNICATIONS LIBRES N°5</span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Chair: Gabon-RCA / Cameroun</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >16h00 - 17h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold max-w-[500px] mb-2 text-[13px] uppercase ' >Orthopédie & Traumatologie septique</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>SESSION DE COMMUNICATIONS LIBRES N°6</span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Chair: Gabon-RCA / Cameroun</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >17h30-18h00</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >PAUSE CAFE</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >18h00-19h30</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold max-w-[500px] mb-2 text-[13px] uppercase ' >Orthopédie tumorale</p>
                          <span className='bg-[#0B448D]/70 p-2 rounded text-sm font-bold text-white'>SESSION DE COMMUNICATIONS LIBRES N°7</span>
                          <p className='text-[#0B448D] text-sm mt-3'>
                            Chair: Gabon-RCA / Cameroun</p>
                        </div>
                      </div>
                      <div className='flex  py-5'>
                        <div className='w-[25%]'>
                          <p className='font-bold' >19h30-xx</p>
                        </div>
                        <div className='w-[75%]'>
                          <p className='font-bold bg-[#066A52]/70 p-2 rounded text-white' >CLOTURE DE GALA de 22h à xxh</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </TabsContent>

              </Tabs>
            </div>


          </div>
        </section >

      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <section className="content-inner-2" id='participant' >
          <div className="px-6 lg:px-16 md:px-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 ">
              <div className="section-head style-3 wow fadeInUp" data-wow-duration="2s"
                data-wow-delay="0.2s">
                <h6 className="sub-title_section  mb-[15px]">COMITÉ SCIENTIFIQUE</h6>
              </div>

              <div className="icon-bx-wraper style-3 group  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Président </h5>
                  <p className=' pl-4 py-3'>Pr Jean BAHEBECK</p>

                </div>
                <div className=" absolute group-hover:block hidden max-w-[300px] z-20 min-h-[300px] ">
                  <div className="relative" >
                    <div className=" shadow-lg  relative rounded-[12px]  z-20 dlab-team ">
                      <div
                      >
                        <div ><img alt="" aria-hidden="true" className="rounded-[12px]"
                          src="/assets/images/galerie/bahebeck.jpg"
                        /></div>

                      </div>


                    </div>
                    <div className=" border-4 border-[#066A52] absolute top-[20px] left-[20px] w-full h-full rounded-[12px] z-10 " ></div>

                  </div>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Membres </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Ibrahima FARIKOU</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} /> Pr Daniel HANDY</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Leroy Guifo</li>

                  </ul>

                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">

                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Membres </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Plus Fokam</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Gustave TSAGADIGUI</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Cyrille TAKU</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Plus Fokam</li>

                  </ul>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Membres </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Kenfack Roseline</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Loic FONKOUE</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Theophile NANA</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Atemkeng Faustin</li>

                  </ul>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Membres </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Nyekel Raphaela</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Bayiha Alphonse</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Olama Atangana Vincent</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Titcheu Flobert</li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <section className="content-inner-2 my-[70px]" >
          <div className="px-6 lg:px-16 md:px-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 ">
              <div className="section-head style-3 wow fadeInUp" data-wow-duration="2s"
                data-wow-delay="0.2s">
                <h6 className="sub-title_section  mb-[15px]">COMITÉ D&#39;ORGANISATION
                  ET DE SUPERVISION</h6>
              </div>

              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Patronnage </h5>
                  <p className=' pl-4 py-3'>Ministre de la Santé Publique</p>

                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Présidence </h5>
                  <ul className="list-check white pl-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr MAURICE AURÉLIEN SOSSO</li>
                  </ul>
                  <span>
                    Professeur émént de Chirurgie, Recteur de
                    Université de Yaounde
                  </span>

                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">

                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Professeur Invité et Président d&#39;honneur </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Seydina Issa Seye Laye de L&#39;UCAD</li>
                  </ul>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Sécrétaire Général </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Jean Baybeck</li>

                  </ul>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Sécrétaires Généraux Adjoints  </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Ibrahima FARINOU</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Daniel HANDY</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Pr Plus Fokam</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr pho Jean Gustave akade</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Cyrille TAKU</li>
                  </ul>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Auditeur SICOT SAPO </h5>
                  <ul className="list-check white px-[30px] pt-3 ">

                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Jean Emile Baytha</li>

                  </ul>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Trésorier</h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />De Olivier Kenedy Mouliom</li>
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Loic Fonkoue</li>

                  </ul>
                </div>
              </div>
              <div className="icon-bx-wraper style-3  box-hover wow fadeInUp relative active text-white">

                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h5 className='  bg-[hsla(45,44%,96%,.2)] py-[5px] px-[30px] rounded-full uppercase ' >
                    Commission aux comptes </h5>
                  <ul className="list-check white px-[30px] pt-3 ">
                    <li className='flex items-center gap-x-2 mb-2'><FaRegCheckCircle className="text-white" size={16} />Dr Loic Fonkoue</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  )
}

