import React, { useState, useRef } from "react";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import HeroBottom from "../components/HeroBottom";
import SignUpDrawer from "../components/SignUpDrawer";
import SignIn from "../components/SignIn";
import VerifyNumber from "../components/VerifyNumber";
import { Drawer, useDisclosure } from "@chakra-ui/react";
import Mainpage from "../components/Mainpage";
import New from "../components/New";

export const HomePage = () => {
  const [reg, setReg] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [signIn, setSignIn] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      {reg !== "" ? (
        <VerifyNumber
          mobile={mobile}
          setReg={setReg}
          setSignIn={setSignIn}
          email={email}
          isOpen={isOpen}
          btnRef={btnRef}
          onClose={onClose}
          onOpen={onOpen}
          signIn={signIn}
        />
      ) : signIn ? (
        <SignIn
          mobile={mobile}
          setMobile={setMobile}
          setEmail={setEmail}
          email={email}
          setReg={setReg}
          setSignIn={setSignIn}
          signIn={signIn}
          btnRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
      ) : (
        <SignUpDrawer
          mobile={mobile}
          setMobile={setMobile}
          setReg={setReg}
          setSignIn={setSignIn}
          setEmail={setEmail}
          email={email}
          btnRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
      )}
      <Navbar btnRef={btnRef} onOpen={onOpen} />
      {/* <Hero /> */}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem itaque
      voluptas voluptatum officia perferendis atque ad! Est iure aliquam
      accusamus blanditiis nesciunt sed animi quia exercitationem iste ea
      maxime, neque cumque accusantium possimus eos repellat soluta voluptatibus
      in libero excepturi, dolores eius minus. Nihil officiis quos tempore quas
      voluptas alias aspernatur unde quae excepturi, facere enim placeat,
      recusandae animi deleniti, ipsa cum dicta veritatis ut! Temporibus
      adipisci reiciendis ullam, veniam eum perspiciatis expedita molestiae
      recusandae voluptatum dolorem velit aspernatur laudantium quod fugiat
      veritatis ab aperiam necessitatibus rem provident deleniti. Distinctio
      ratione optio doloribus quo id, velit numquam porro asperiores ipsam
      corporis corrupti accusantium recusandae delectus quod suscipit modi
      labore culpa deserunt illum, error accusamus, animi unde! Enim nesciunt ea
      vel, libero accusamus eligendi sed reprehenderit accusantium nihil esse
      rerum facilis illum! Voluptas accusantium blanditiis in odit obcaecati
      repellendus magni sit, accusamus dolorem, cum quasi nisi quam officia
      ullam eveniet reprehenderit commodi. Ad consequuntur magnam eligendi.
      Facere quasi, iure ut ullam suscipit expedita veritatis incidunt nihil
      praesentium, illum minus asperiores cum! Eligendi eius maiores natus
      magnam harum velit, similique explicabo minus illum cumque dicta. Deserunt
      voluptatibus temporibus nisi consequatur voluptates doloremque voluptatem
      eaque amet expedita quibusdam perferendis dolor, quod dolorum recusandae
      odio quidem fuga ex, commodi quis atque. Nulla tempore repellendus earum,
      reiciendis alias praesentium eos necessitatibus, voluptas sed maxime
      aliquid est, porro dolorem obcaecati labore velit dicta ut blanditiis quae
      amet! Eligendi officia, repellat voluptas, animi quae, quia dolor in
      laudantium minima debitis magnam excepturi labore quasi ea magni harum
      error fugiat nisi. Fugit eius facilis doloribus voluptas commodi hic
      consequuntur dicta dignissimos voluptatum provident recusandae itaque
      maiores eveniet perspiciatis molestias eos at, minus accusamus velit
      blanditiis, cumque sequi fuga. Cum quae aut voluptatibus laborum atque
      iure repellat quo qui, saepe corporis fugiat maxime? Aliquid non
      laudantium neque ipsa quaerat nisi molestias veritatis, vero excepturi,
      molestiae rerum similique eveniet maxime ipsam sequi asperiores
      blanditiis. Quo voluptatem distinctio ipsam aliquid corporis eius aliquam
      neque tempora minima nihil! Distinctio quasi aspernatur sit dicta ex
      maxime nostrum reprehenderit laboriosam, labore deserunt similique
      necessitatibus quod corrupti assumenda error ducimus in explicabo ipsum
      qui dolor odit placeat molestiae. Temporibus, illum facere? Nam nostrum
      expedita neque delectus vitae porro quod assumenda, officiis libero eaque
      beatae quisquam, fugit ab enim inventore similique laudantium ipsam
      quibusdam accusantium minus sunt. Voluptate doloribus dolores aut, tempora
      quam nesciunt fugit consectetur nulla, pariatur sint quis at architecto
      amet omnis praesentium sequi voluptas cum, nemo ut! Ratione debitis
      voluptatum excepturi doloremque nobis nesciunt amet obcaecati a,
      praesentium fuga voluptates sunt neque, repellat quas cumque odio expedita
      laboriosam, ad ipsam blanditiis quisquam iure sint. Sequi eum quaerat
      minima, sapiente quia dicta? Saepe repellat, ex natus, sint id recusandae
      ab enim veniam necessitatibus, voluptatem quibusdam vero distinctio
      perferendis numquam. Repellat officiis laudantium qui quidem incidunt
      iusto vitae provident ratione ut repellendus nam nisi, voluptates ex quia
      vero quas consectetur eaque eum? Cupiditate amet consequatur praesentium
      sapiente rerum aspernatur, nostrum sunt nobis pariatur facere fugiat?
      Voluptatibus deleniti architecto quidem, nisi animi, repudiandae ipsam
      quaerat quod assumenda reiciendis accusantium porro cum iure quo pariatur
      omnis magni iste officiis non ipsum laudantium possimus. Distinctio non,
      neque ratione soluta deleniti corporis consequatur praesentium sit
      incidunt earum necessitatibus voluptate quam adipisci placeat nobis
      reprehenderit fuga, eligendi, quos quasi itaque accusantium sequi tenetur?
      In, odit recusandae nihil quaerat eius eligendi quia laudantium aperiam
      eos inventore magnam eaque debitis illo veritatis pariatur voluptates
      ducimus, possimus nulla tempore laborum excepturi! Quas, quo! Id
      architecto in, ipsam quis natus illum, deleniti, enim quibusdam excepturi
      inventore ab atque magnam maiores similique ad. Natus sapiente obcaecati
      quae vel laborum dolor dolorem a voluptate illum nihil tenetur sunt, iure
      velit dignissimos debitis ipsam, eaque voluptatum. Odio natus unde ad
      aspernatur accusamus fugit vitae ipsum iusto ipsam facilis, non architecto
      molestias voluptates a enim earum officiis! Sed minus id, quam blanditiis
      cum tenetur aut quaerat eos doloremque nobis nesciunt in fugiat ipsa? Sint
      obcaecati earum rerum quasi modi cumque voluptate dignissimos blanditiis
      facere ab incidunt culpa ipsam quae saepe odit minus nemo explicabo autem
      exercitationem, repellat nulla fugit consequuntur! Fuga consequatur
      voluptates sequi dolorum suscipit. Quam similique, sequi esse sit porro
      labore, reprehenderit nihil, veritatis sed hic debitis vitae laudantium
      minus praesentium dignissimos inventore. Officia ea ratione alias nam.
      Nisi dignissimos, ipsam ad obcaecati tempora quia, nulla consequuntur,
      veritatis corporis quod architecto cum excepturi reiciendis cupiditate at.
      Consequuntur, asperiores rerum? Suscipit expedita repellat veritatis alias
      quae, porro voluptatem quod, quia, maxime excepturi ut nulla magnam
      laudantium sunt dolore deserunt esse doloremque inventore recusandae modi!
      Officia cumque numquam totam ab, dolores reprehenderit praesentium
      necessitatibus laudantium veniam iusto sit esse repellendus aspernatur
      blanditiis nostrum quidem quis eveniet exercitationem ipsa eius accusamus
      fugit? Magnam quasi numquam voluptate quod iusto commodi excepturi
      delectus. Quod consequatur beatae saepe nesciunt eveniet voluptatum
      itaque, possimus magnam illo eos? Atque, recusandae quia possimus dicta
      dolores facere optio sunt fugiat laboriosam voluptas aperiam, unde ratione
      provident porro repudiandae placeat nobis. Asperiores neque repellendus
      veniam officiis voluptates fugiat mollitia, harum eveniet recusandae ipsum
      eligendi fuga odio animi quas voluptas. Ducimus debitis animi, rerum
      doloribus odio, voluptatum fuga voluptas delectus eveniet nam aut eos
      eius! Error eum tempora id ad! Laboriosam, eaque, quod porro rerum tempore
      voluptate deleniti architecto officia veritatis eligendi sapiente
      accusantium, laborum dignissimos. Eum quaerat quis, ducimus natus pariatur
      perferendis aut numquam maiores nihil eaque explicabo fuga! Dignissimos ea
      adipisci incidunt pariatur sed. Eum ipsum, amet alias ea aperiam minus ab
      dignissimos sed rerum ullam modi, quae corrupti dolore asperiores quaerat
      vero in incidunt laudantium aut. Hic eos labore totam, perferendis ullam
      autem! Itaque, atque molestiae repellat unde consequuntur magnam
      repellendus iusto odit modi voluptates nisi nulla quidem cupiditate quod
      impedit recusandae optio odio, suscipit sed deleniti eligendi cumque.
      Blanditiis nostrum, harum incidunt, culpa dolore recusandae aut doloribus
      a magnam ad neque quis ab dolores omnis cum repellat maiores temporibus
      suscipit fuga? Porro, exercitationem officia consequuntur obcaecati illum
      officiis nostrum, eligendi non, adipisci quod delectus impedit quasi
      quisquam debitis libero. Necessitatibus tenetur quisquam unde aut ipsa
      accusantium officia natus voluptate nam voluptatibus, expedita dolores
      debitis est aspernatur obcaecati possimus incidunt neque facilis sequi, at
      ipsam. Illo recusandae possimus quibusdam est harum distinctio magni
      corporis quasi obcaecati enim culpa cupiditate at, voluptatibus excepturi
      animi a amet beatae nihil ad consequatur labore eveniet. Culpa quo veniam
      consequuntur veritatis, quaerat vitae officiis illum eos odio iusto earum
      laboriosam magnam temporibus similique ipsum porro delectus aspernatur
      consectetur aliquam beatae nesciunt aut repudiandae non eveniet.
      Consectetur adipisci architecto, ipsum nihil velit, cumque voluptatibus
      sint quas repellat exercitationem quibusdam culpa est voluptatem iste eius
      suscipit facilis soluta cum temporibus illo, vero excepturi consequuntur.
      Ipsa deserunt non laboriosam odio ut ex, obcaecati nihil et earum,
      incidunt officia. Vitae corporis ipsa iste minus sunt magnam saepe sed
      maiores, alias laboriosam asperiores tempore explicabo veniam nulla
      voluptatum, quibusdam porro provident architecto? Omnis, non a nihil
      voluptate sequi, totam enim reiciendis nulla eos maiores explicabo aliquid
      fuga ratione incidunt nam dolorum quis quam, distinctio doloremque
      laboriosam cumque. Voluptatem accusamus similique soluta eius cum minima
      architecto earum doloribus nesciunt illo quas recusandae neque provident
      laudantium officia ipsum nulla porro, quae labore reiciendis,
      necessitatibus corporis voluptatibus? Pariatur libero explicabo voluptates
      laudantium aspernatur quo beatae rem. Est a, magnam quae ducimus delectus
      sit beatae ad odio assumenda mollitia. Maiores minima libero labore
      suscipit eius tempora a dolorem voluptatem, nemo non nesciunt odit, dolore
      doloremque eveniet laborum. Vel voluptatum inventore facilis veritatis
      quae vitae nemo. Facilis dolor debitis odit nam corrupti repellendus
      adipisci harum fugit esse accusamus fuga in magnam vero blanditiis
      obcaecati doloremque, aliquam tempora nesciunt distinctio. Illo earum in
      qui maxime, aperiam excepturi dolore architecto, eligendi dolor doloremque
      repellat, nihil animi odio cupiditate modi beatae deleniti. Architecto
      reiciendis obcaecati delectus, nesciunt nostrum quo iusto quidem soluta
      itaque at alias. Beatae reprehenderit pariatur consequuntur explicabo
      doloremque quam nihil inventore et recusandae, amet nisi enim, eos
      deleniti, nesciunt corrupti corporis sapiente aspernatur incidunt
      quibusdam libero magnam provident dignissimos! Asperiores, neque eaque
      mollitia veritatis excepturi maiores placeat aut similique in molestiae
      quisquam tenetur vel repudiandae corporis accusamus voluptas nostrum nisi
      voluptatum nihil explicabo repellat. Eveniet ex odit temporibus ea debitis
      hic? Saepe sed dolor numquam animi eum maxime reprehenderit soluta.
      Architecto iure molestiae temporibus eos necessitatibus praesentium
      voluptas rem et eveniet eligendi, repellendus pariatur enim, sint deserunt
      ad esse voluptates obcaecati vel delectus, voluptatibus exercitationem.
      Quibusdam neque accusantium, amet totam eum a qui suscipit reiciendis
      blanditiis quod reprehenderit officia, corrupti minus explicabo quia
      nulla? Neque cum aliquam culpa cumque labore omnis optio quaerat eius,
      sunt eum, nesciunt harum corporis corrupti porro quae voluptatibus fugit
      consequuntur nobis tempora ipsa vitae veniam. Obcaecati eos placeat
      nesciunt possimus laborum quis, neque eaque nobis consequuntur totam quia
      fugiat reprehenderit esse! Esse voluptatem ad qui repellat quod quia sint
      iure tenetur iste officiis odit perferendis saepe ipsum, incidunt deserunt
      et quam voluptatibus debitis ducimus molestias dolor. Blanditiis provident
      porro tempora impedit, dolore aspernatur, ad vel officia distinctio
      similique alias mollitia ratione repudiandae enim atque itaque deserunt,
      perspiciatis ipsa. Sunt est incidunt voluptates aperiam magnam esse
      ducimus ad a blanditiis quod, corrupti, impedit dicta beatae deserunt,
      temporibus cum. Assumenda ipsa sed id reprehenderit, quidem animi facilis
      deleniti quasi, reiciendis vitae sunt, dignissimos eius ad? Error
      perspiciatis numquam eligendi excepturi molestiae nihil eveniet ratione
      illum corporis reiciendis fugit, veniam quae, distinctio voluptatem. Quas,
      velit? Laborum libero cum quia animi ad, sapiente atque, ratione
      aspernatur necessitatibus a vero aperiam quisquam voluptatibus hic vel
      doloribus nulla minus minima quis aliquid omnis iure aut, eaque aliquam.
      Facere eligendi cumque labore ea odit quia, iusto, ducimus doloremque
      deleniti nisi, molestiae ex cupiditate. Dolore voluptas omnis dolorum
      nulla reprehenderit impedit sequi maxime incidunt, quos voluptatum nemo
      tempora, nam ut, pariatur cum labore doloribus accusamus cupiditate ea et
      excepturi velit explicabo voluptatem nobis. Omnis explicabo tempora totam,
      quae optio mollitia praesentium. Molestiae, quod. Vel delectus,
      repellendus aliquam fugit voluptates perspiciatis excepturi, officiis unde
      optio sunt enim similique sapiente eos dolores distinctio inventore
      accusantium earum veniam ipsa fugiat facilis ut beatae deserunt tempore!
      Saepe minus laborum, rem natus ducimus dicta molestiae tempora optio
      possimus consectetur cumque harum, laboriosam, quibusdam ratione. Nulla
      unde magnam nihil asperiores molestiae doloremque, quae rem! Hic tempora
      ut quisquam magnam explicabo expedita nam accusantium laboriosam iusto
      fugiat? Voluptas, voluptatibus laudantium sed cumque libero culpa
      consequatur. Eaque deleniti laboriosam officia tenetur. Vero obcaecati
      rerum suscipit numquam aut quos ullam reprehenderit rem itaque odit
      praesentium nihil aliquid quae, necessitatibus veniam placeat repudiandae
      quisquam accusantium similique natus unde doloremque fugit? Sunt quo
      delectus exercitationem reprehenderit expedita quis dolorum quos fugit
      odit illo iusto voluptas nostrum, odio dolorem recusandae dolore, placeat
      ad similique mollitia ab alias nulla eaque adipisci quisquam! Dignissimos
      molestias veritatis assumenda ipsa nihil doloremque voluptates, neque,
      harum cum quos quo facere quasi dolorem! Illo, corporis praesentium
      distinctio qui reiciendis, aliquam exercitationem unde dolor asperiores
      iste aperiam voluptate corrupti. Repellat mollitia libero laborum vero
      officia totam aperiam harum officiis ratione illo? Error velit laudantium
      numquam eveniet possimus alias. Consectetur magnam obcaecati eligendi
      porro officiis facere nesciunt tempore laborum! Provident ea quis repellat
      illo commodi voluptatem dolorem molestiae eum incidunt similique? Ducimus
      modi ad non inventore culpa repudiandae labore est ex, cumque a commodi
      officiis, impedit omnis assumenda facere consectetur? Distinctio
      voluptatibus, totam, possimus quasi atque, ad reprehenderit similique qui
      accusantium minus voluptatem amet earum rerum? Rerum eaque suscipit nemo
      cum quisquam aliquam, quidem ducimus. Expedita ab quis aliquam dicta
      voluptatibus tenetur commodi sint? Consequatur vitae placeat eveniet totam
      fuga modi quas nobis. Quia odit tempora ad, officia fugiat laboriosam in
      dignissimos aliquam vitae necessitatibus quam ducimus ullam debitis
      repellat beatae amet voluptate. Repellendus obcaecati necessitatibus non
      ipsa possimus itaque hic, aspernatur optio. Aut, quas, unde architecto
      ducimus repudiandae cum eveniet saepe debitis ea omnis fugiat, tempora
      minus nemo rem culpa dignissimos iusto iure sequi est hic magni obcaecati
      vel qui consectetur. Neque cum unde odio nisi, consequatur impedit nihil
      quis aspernatur suscipit, quia sed architecto animi fuga, nam ipsa
      deserunt tenetur veritatis totam? Aliquid expedita nisi ipsam cupiditate
      consectetur ab velit quisquam et reiciendis, qui voluptatum nostrum optio
      quo? Possimus quibusdam fugiat sunt velit architecto! Distinctio dolorum
      porro veniam dolorem provident fugit? Ad reprehenderit quam esse, ipsam
      consectetur eaque vero nemo officia earum voluptatem ratione quas unde ea
      fugiat fuga soluta assumenda, impedit dolores sapiente exercitationem
      error? Minima voluptate molestias quos esse ab unde, cumque accusantium
      quod vero! Dicta, quos? Officiis quae, tempore quod nam voluptates odit
      omnis ullam magnam quisquam facere quidem quia quos est repellendus
      expedita quaerat aperiam maxime sapiente possimus nisi quas. Nesciunt quia
      hic ab a sed nisi maxime, sit deleniti suscipit corrupti, natus, voluptate
      nihil? Numquam, deserunt quia. Fugiat earum officiis, nemo, dolor aut quae
      laboriosam debitis dicta vitae beatae quisquam temporibus reprehenderit
      nostrum ea. Culpa at explicabo voluptates hic, illo corporis quaerat
      inventore repellat? Reprehenderit vero saepe odit quaerat eum libero
      voluptates architecto itaque ducimus sequi deleniti nesciunt dolorum ex
      dolore consequuntur dolorem vitae praesentium aliquam repudiandae
      necessitatibus odio harum at, soluta in. Similique numquam quidem vero
      eum? Impedit nihil rem culpa non eaque quibusdam magnam exercitationem
      quas aliquid autem? Nisi voluptatibus modi ab iste. Explicabo velit
      laudantium iusto ad itaque incidunt nihil asperiores pariatur quae
      adipisci totam accusamus temporibus sapiente, alias reprehenderit. Nemo
      ipsam, quam consectetur deserunt maxime, fugiat temporibus hic blanditiis
      eos accusamus natus a beatae inventore unde necessitatibus. Veritatis iste
      ex earum quasi obcaecati? Placeat qui nobis nulla itaque mollitia libero
      laudantium totam laboriosam debitis, quibusdam vero quas voluptate? Veniam
      et deleniti cupiditate tenetur modi deserunt veritatis neque officia
      expedita dolorum odit hic aperiam quasi alias ab maiores cum perspiciatis
      quae earum cumque, eligendi ut tempora! Placeat sapiente tempora
      exercitationem voluptates saepe fugiat delectus iste repellendus debitis
      natus? Provident eligendi commodi voluptatem, rerum repellendus eos. Omnis
      voluptatum id placeat rerum velit molestiae est recusandae nesciunt odio
      tempore obcaecati quae, ipsa nisi dolores itaque cupiditate accusantium
      dolor, nam officiis. Asperiores laborum fugiat beatae ex perferendis. Quis
      dicta similique beatae perferendis optio aspernatur inventore ipsam
      maxime, reiciendis eveniet at ullam ipsum asperiores laudantium earum cum
      suscipit? Velit quia perspiciatis consequuntur? Cumque dolore non vero,
      beatae doloremque vitae quae mollitia possimus saepe, porro odio ad fugit
      temporibus? Officiis nam eaque quidem doloribus ab nesciunt modi alias,
      laudantium architecto cum perferendis assumenda voluptate consectetur quas
      nobis beatae vitae recusandae quos quae fugit temporibus voluptatibus
      libero dolores? Maiores nulla, inventore omnis ratione explicabo et dicta
      voluptas. Debitis inventore ratione ad ut, laudantium nemo asperiores!
      Dolor, error perferendis. Possimus, consequuntur dolorem, exercitationem
      molestiae ratione deserunt ipsum laudantium, veritatis quo sit quidem
      quaerat fugit itaque corporis? Corporis voluptas incidunt porro culpa quas
      illum consectetur molestias totam architecto perferendis natus nostrum
      nisi dolore blanditiis, praesentium eligendi officiis minima expedita
      aperiam non ipsam eaque et explicabo ducimus? Sunt officiis neque quo
      sapiente dignissimos alias, recusandae perferendis modi non provident
      architecto beatae voluptatibus, ab, at adipisci nobis rem! Magni fuga at
      voluptas inventore illum, eaque nemo sed neque incidunt deserunt molestiae
      consequatur dicta necessitatibus ut perferendis, provident beatae
      explicabo iste amet labore animi illo vitae similique? Ullam molestiae
      laudantium, magni sunt expedita exercitationem. Facilis eligendi dolorem
      id? Fugit ex iste ab fugiat! Non similique quia minima sapiente eaque
      magni alias possimus distinctio temporibus beatae voluptatem quidem
      repellat consequuntur commodi quas esse explicabo nemo, error deleniti
      accusamus laudantium! Dolores ipsum optio dicta commodi facere perferendis
      architecto provident mollitia enim esse corrupti distinctio et dolore,
      accusamus id repellendus quidem quod earum odio atque error facilis,
      suscipit quisquam consequuntur! At, accusamus quis eos cum sed doloremque
      magni, deserunt fugit commodi nobis possimus iusto dolores sapiente qui
      quod hic dolorem. Nulla vel quibusdam obcaecati minus error accusantium
      reprehenderit placeat? Pariatur incidunt esse molestias. Atque porro quia
      perspiciatis, eaque ipsa exercitationem, laborum hic repellat accusamus
      commodi, recusandae non quaerat deserunt voluptatem! Placeat, ipsa velit
      quis fugiat id a expedita commodi repellendus voluptas error, corporis vel
      excepturi officia ab beatae quas quos soluta minima dolor quibusdam porro
      veniam adipisci esse. Illo ullam sed nam exercitationem dolore et aperiam,
      commodi quaerat harum, laboriosam voluptates doloremque? Quae magni
      officiis vitae inventore, nesciunt nobis illo dolorum voluptas laudantium
      recusandae eligendi quas eum iusto officia dolorem fugit, deserunt
      obcaecati aperiam aut blanditiis, molestiae unde sit maiores. Odit esse
      neque veniam cum magnam aperiam laboriosam dolorem deserunt optio,
      reiciendis nihil excepturi minima doloribus sequi aliquam dolorum ipsum
      tenetur! Vel, odio. Molestiae iste, voluptate, eos velit modi rerum
      dignissimos voluptatem nesciunt dolore numquam expedita eaque sequi nihil
      porro quod ad. Autem obcaecati sunt natus minus explicabo at
      necessitatibus ea, ab qui sapiente voluptas odit cupiditate, nobis eaque
      expedita. Consequuntur suscipit perspiciatis illum unde in enim ut
      voluptas laborum? Expedita veniam ratione numquam eius dolores eum sequi
      vitae minus odit corporis rem, tempora suscipit quaerat! Porro cum itaque
      perspiciatis labore inventore neque eaque? Eum repellat adipisci dolores
      est voluptates repudiandae corrupti suscipit natus, ducimus veritatis
      exercitationem esse nihil distinctio architecto officiis deleniti mollitia
      in necessitatibus maiores magni debitis delectus et? Vitae, reiciendis
      illo laborum voluptas ab magnam voluptates aspernatur magni obcaecati
      dignissimos perferendis unde ipsa. Molestiae neque inventore aperiam iure!
      Mollitia velit incidunt autem blanditiis voluptatem, quo iusto voluptates
      pariatur natus architecto exercitationem ipsum soluta, temporibus illum
      unde! Impedit eum non voluptate ea cum laborum dolorem optio quidem
      recusandae odit, eveniet possimus. Tempora cumque ipsum debitis ex modi
      aperiam corrupti inventore amet consectetur est nemo ea aliquid, rerum,
      nesciunt iusto nam doloremque culpa doloribus? Nesciunt earum ea,
      necessitatibus iure eius corrupti quibusdam nam, est labore maxime velit
      dignissimos reiciendis laborum quia esse quaerat sint excepturi numquam
      deserunt expedita recusandae. Asperiores accusamus, excepturi atque
      inventore enim laborum, aspernatur corrupti, minima eveniet voluptatem
      ipsa minus repudiandae quas eligendi nobis vero corporis. In blanditiis
      expedita quo consequuntur! Voluptatum eum reiciendis perspiciatis
      obcaecati quidem, tempora fugit animi porro accusantium eligendi in vitae
      aliquid temporibus sapiente! Id, sunt! Animi perspiciatis corporis
      asperiores repudiandae error dolorum iusto veniam, odit blanditiis
      quisquam, porro, tempore accusantium. Possimus labore fugit nemo minima ut
      sequi ipsam aspernatur, perferendis doloremque ipsum vero eos quis
      officia. Iste enim delectus ea corrupti perferendis veritatis eius
      suscipit similique aperiam nisi quaerat, quos repudiandae fugiat maiores
      illo ex amet sapiente fugit nulla ad nemo consectetur sed? Provident hic
      enim vel ipsum tempora vitae magni cum obcaecati, alias modi deserunt,
      quos rem corrupti, excepturi asperiores? Architecto, vitae dignissimos!
      Tempore aliquam maxime voluptas nesciunt nam harum placeat sapiente iure,
      laudantium assumenda deserunt doloremque similique distinctio ipsum natus
      at voluptatibus quae delectus quos magnam! Voluptatum, maxime! Illum
      soluta dignissimos neque, sed suscipit, delectus placeat officiis
      reprehenderit quis quam voluptatem quasi, rem facere in repellat porro
      repudiandae tempore? Asperiores dicta, quaerat tempora qui eos, distinctio
      saepe porro deserunt sit mollitia error itaque nisi iure, cupiditate nemo?
      Quos quisquam cumque modi. Excepturi quis fugit minus, ad provident ea
      nulla cum aperiam dolores nesciunt voluptatibus voluptatum expedita neque
      quia corrupti, beatae soluta in vero? Numquam sequi id perferendis animi
      maxime, unde dolores inventore voluptas, optio alias culpa iusto
      similique! Necessitatibus saepe quisquam tempore expedita itaque totam
      odit error eum eos, labore deserunt natus voluptatum harum perspiciatis!
      Reiciendis, ullam modi enim rem facere neque esse deserunt quas quia iste
      dicta autem laborum vitae vero similique corporis doloribus expedita ex.
      Beatae quia culpa qui expedita tempora assumenda deleniti voluptas ex?
      Debitis illo omnis, enim totam fugit et quas iste itaque eveniet expedita.
      Porro a unde quia vel suscipit asperiores, quisquam accusamus earum dolor
      optio assumenda cumque architecto velit corrupti. Eveniet id omnis
      perspiciatis eos dicta earum similique ullam delectus eaque assumenda qui
      sequi odio vero iste cum, voluptas nemo suscipit asperiores animi maxime
      sapiente debitis! Porro, laborum modi neque alias possimus inventore
      nesciunt ducimus. Qui fugit incidunt laborum laboriosam sed officiis quas,
      quaerat corporis modi, aut error inventore recusandae! Velit accusantium
      beatae provident tempora, consequatur, dolor aperiam fuga amet recusandae
      enim tenetur, dolore architecto ratione tempore. Voluptate laboriosam enim
      consectetur et, asperiores dicta facere ad dolores repellendus id? Aperiam
      mollitia esse corrupti ea quas repudiandae architecto velit fugit iusto
      sapiente cum laborum, nulla aliquam optio corporis nemo ipsum reiciendis
      accusantium? Unde nemo reprehenderit at atque vero a culpa rem officiis,
      tempora id numquam nulla ipsum inventore in dolorum earum quidem debitis
      deleniti accusantium iusto ea esse corporis nesciunt? Id natus magni quas
      at fugiat pariatur, aut ea tenetur? Praesentium impedit quo aliquid
      voluptatibus? Magni eaque impedit obcaecati numquam possimus ad doloremque
      excepturi delectus, qui id expedita totam alias quidem voluptatem
      corporis! Sed sit voluptatum ipsum labore, magnam assumenda et rerum. Sit
      vitae dolorum deserunt consectetur ex dicta corporis enim, veniam ullam
      necessitatibus minus amet fugiat, labore vel similique aperiam dolore id!
      Dolor id culpa consequuntur excepturi? Aut sunt facere quasi vitae, quis
      porro culpa tempora totam voluptatibus atque placeat cum. Molestias,
      dolore? Doloremque, harum? Quam esse exercitationem voluptatum vel? Odit
      nihil eos quo ratione et veritatis voluptatibus, praesentium rerum
      voluptates iusto nesciunt debitis, dolore necessitatibus quasi qui eius
      laboriosam culpa fugit dolorum eum officiis magni nam dignissimos. Eum
      quibusdam veritatis possimus culpa enim architecto numquam dolorem at?
      Cumque consequatur doloremque necessitatibus quod, exercitationem sunt,
      eius autem perferendis repudiandae dignissimos mollitia asperiores officia
      enim optio vel ad recusandae, a et quos assumenda esse neque! Laudantium
      doloribus saepe voluptas. Soluta necessitatibus alias asperiores sequi
      illo in. Repudiandae tempore ratione tenetur architecto eaque. Provident
      magni distinctio culpa facilis incidunt commodi labore! Pariatur vitae
      maiores architecto sapiente sequi est vero ut debitis ex, quidem deserunt
      unde modi itaque dolorem odio facere voluptates cupiditate dolore ad atque
      soluta in porro voluptatem! Illo quos cupiditate veniam, inventore officia
      rerum sunt excepturi saepe aspernatur sequi alias iure voluptatum labore
      doloribus soluta. Temporibus, enim? Praesentium, esse tempore. Quis
      cupiditate ut blanditiis repellat nisi ab earum consequuntur, ex
      necessitatibus dolorem quae nam ad dolor praesentium qui, temporibus
      laudantium vero quam facilis quaerat porro commodi quas. Velit consequatur
      architecto doloremque aspernatur fugit nam iusto quia dolor esse
      accusantium? Ipsum sint eligendi placeat consequuntur cupiditate sapiente
      odit pariatur commodi ad! Modi rerum sapiente magnam nulla. Ratione,
      tempora sunt velit, fuga provident vero ullam aspernatur est consectetur
      quo nam. Enim, molestiae ut expedita odio ex commodi officiis, harum velit
      rem eos sint tempore, impedit nisi corporis voluptas nostrum eius quod
      quae esse a hic voluptates eligendi reiciendis. Et repellendus nemo ullam?
      Obcaecati facere laboriosam ut quas ipsa culpa iusto, maxime illum aut
      impedit laborum veritatis? Dolore deleniti, commodi quia tempora minus
      possimus reiciendis odit deserunt laborum eaque repellat cumque corrupti
      earum quam labore alias cum maxime. Ducimus voluptatem voluptas quae
      sapiente qui ex. Quos, alias nemo possimus esse, cum consectetur corrupti
      magnam, accusantium cumque est amet ut doloribus excepturi facere.
      Asperiores, eos. Voluptatum delectus, quam repudiandae distinctio ducimus
      ipsam ipsa! Voluptatem, natus voluptas! Doloribus numquam nesciunt sint
      minus fugit commodi vel ut. Quae, similique itaque earum neque minus quasi
      quidem repellendus distinctio enim numquam amet alias adipisci eius ipsum
      commodi eum tempore corrupti excepturi! Obcaecati temporibus quos in.
      Nihil numquam unde quaerat a atque, autem consectetur iste non voluptas
      officia eaque, corrupti enim, consequuntur harum. Repudiandae facilis
      veniam inventore hic dicta temporibus praesentium cum rerum vel veritatis
      id, nesciunt esse facere quo, eum consequatur consectetur eos provident
      perferendis aspernatur officia. Ducimus sed harum aliquid repellat itaque
      odio perspiciatis. Expedita facilis blanditiis dignissimos neque itaque
      dolorum, quas accusantium quae accusamus error ratione! Esse voluptatibus
      dolorem id nostrum incidunt officiis molestiae. Aliquid omnis fugiat
      maiores voluptatem, non dolores quae eligendi eveniet velit corrupti
      quisquam perspiciatis, labore autem. Assumenda hic natus non vitae
      consectetur aut nulla repudiandae atque vel voluptas molestias, voluptatum
      rem repellat sapiente dolores nihil eaque laborum explicabo! Cum quia
      magni, et debitis vel dolore corporis, ex magnam corrupti repellat
      deserunt dolor ut. Obcaecati, corporis hic velit nam laudantium labore
      quis eaque ipsum cumque ab esse alias voluptas ea nobis maiores animi
      magni similique neque optio fugiat! Ex rem atque minima veritatis autem
      recusandae cupiditate fugiat explicabo, quibusdam non ut dolorem vero iure
      molestias maiores sequi accusantium officia! Cupiditate nemo molestias
      voluptatum cumque delectus, rerum omnis sed consequatur magnam non aperiam
      nostrum laboriosam ullam ex dolorum, at totam aliquam voluptatem,
      explicabo quis porro dolorem saepe. Totam aspernatur sed et perspiciatis
      accusamus velit, explicabo cum rerum repellat a dicta voluptate delectus
      accusantium architecto ea corrupti labore quibusdam expedita, nostrum
      mollitia blanditiis. Quibusdam eum aliquid laborum quis, eaque voluptatum
      quaerat. Provident laudantium, ex minima laboriosam dolores, perferendis
      fuga amet debitis nobis nemo ea recusandae velit eveniet. Culpa quisquam
      deserunt facere, at ipsam quis velit, adipisci amet earum vero neque
      reprehenderit suscipit vel ab repudiandae praesentium! Nulla saepe totam
      libero cupiditate ea, repellendus aliquid minus tenetur culpa! Id
      asperiores deserunt laborum doloremque! Velit corrupti laborum voluptates
      quas cupiditate ducimus dolorem quidem distinctio at sit fuga laudantium
      ad, suscipit deserunt totam fugit nobis perspiciatis ut accusamus voluptas
      esse neque odio natus earum. Tempore libero magni ex soluta,
      reprehenderit, adipisci voluptatum obcaecati, perspiciatis ipsa quae at
      nostrum. Consequuntur illum culpa explicabo quam ab incidunt tempora
      corrupti ut nulla, unde molestiae sequi vel. Praesentium assumenda
      repudiandae nihil dolor culpa ad impedit obcaecati perferendis ea et
      inventore amet commodi eaque vitae itaque, id dolore explicabo soluta
      corporis. Ad minima soluta culpa, ab repudiandae laboriosam nam adipisci.
      Possimus vel dolore, facilis quisquam quis blanditiis unde nesciunt,
      inventore soluta mollitia aliquam, totam alias illo error illum est
      maxime! Nemo temporibus ab illum porro unde quas, eligendi illo explicabo
      cum saepe, minima mollitia, quod quis quos doloremque. Magni hic nesciunt
      corrupti maiores maxime enim itaque rerum eveniet, repellat laboriosam
      deserunt possimus tenetur omnis quasi velit accusamus veritatis iusto
      iste! Totam corporis quos nemo? Et eos, quam reprehenderit optio officiis
      dolor consequatur. Alias tempore modi officiis esse magnam sed id nulla
      commodi sequi, incidunt rem error nobis labore nesciunt vero excepturi
      odit voluptatem quaerat. Odit quaerat delectus deleniti voluptates fugiat,
      explicabo enim omnis dolor autem illo quam id nulla sint. Id deserunt at
      laudantium, cumque atque assumenda est aliquid necessitatibus fugit
      perspiciatis, repudiandae temporibus, molestiae doloribus! Sapiente atque
      sed officiis eius natus. Repellendus quae ipsa, cum inventore eius, labore
      architecto impedit quia velit officia delectus voluptates sint molestias a
      ipsum, itaque ullam tempore nihil sed tenetur ratione pariatur fugit. Cum
      maiores beatae suscipit? Quidem cumque exercitationem aut expedita
      praesentium blanditiis beatae maxime pariatur, sequi quod deleniti, iusto
      ut in vitae sapiente dolorum soluta sit recusandae. Vero voluptatum
      laborum minima deserunt, mollitia fugiat ratione id quis quaerat provident
      illum asperiores, minus cumque labore neque nesciunt quasi, tenetur
      accusamus. Animi molestias nesciunt suscipit sapiente adipisci, maiores
      nihil illum. Ab sint, magni necessitatibus rerum saepe ex ea repellat
      facilis, amet soluta accusantium, eligendi expedita pariatur quae!
      Nostrum, ipsam, dolore quae delectus repudiandae aspernatur ea tempora est
      rerum ullam sapiente sequi sed. Libero dolorum animi iure possimus labore
      reiciendis, placeat ad molestias cum hic non numquam, nostrum earum eius
      ab facilis unde necessitatibus natus asperiores quam nisi explicabo. Quasi
      quos corporis ex laborum aspernatur provident eius voluptatibus velit rem,
      error aut qui vero asperiores sint temporibus nesciunt sapiente culpa
      similique molestiae architecto tempora cupiditate. Recusandae atque
      deleniti, quas molestias earum aperiam in mollitia, expedita aliquam quae
      id fugit alias corporis placeat eum. Molestiae unde officiis enim maxime
      magnam, ullam dignissimos! Ratione ex sint eos nisi vero, nesciunt
      quisquam nostrum temporibus delectus asperiores perspiciatis iure
      obcaecati praesentium amet a saepe accusantium. Voluptatem assumenda
      cupiditate cum minima, est voluptatum explicabo delectus debitis tenetur,
      ratione magnam fugiat, beatae vitae modi hic et totam! Optio excepturi in
      autem repellat molestiae, perspiciatis, officiis eveniet mollitia tenetur
      laborum inventore eum dicta fugiat iure ipsum vitae laudantium fuga
      accusantium exercitationem sit sapiente tempora! Voluptas ducimus nam
      repudiandae voluptate non quidem sed! Aperiam et soluta voluptatibus quo
      nostrum quisquam, consequuntur, doloremque amet explicabo necessitatibus
      nam error labore voluptatum neque mollitia, accusamus dolorem expedita?
      Consequatur mollitia dolorum minima ducimus in fugiat debitis accusantium
      cupiditate optio excepturi qui iusto id illo, modi sit sint reprehenderit
      eligendi nisi quos veniam dolore. Eveniet id autem animi incidunt unde
      excepturi maxime quae beatae neque reprehenderit asperiores in possimus
      accusantium laudantium, esse et officia tempora, voluptatum deserunt,
      voluptas libero magni consequuntur a sunt! Est veniam assumenda dolores
      repellat aut, alias, omnis exercitationem qui optio, maiores iusto culpa
      placeat itaque incidunt architecto molestiae. Et, debitis quaerat! Vel
      iure nulla voluptatem doloribus, corporis beatae nemo magni ullam aliquid
      harum? Magnam animi voluptas, omnis odio sit, assumenda accusantium quod
      minima inventore, dignissimos aliquid delectus. Soluta eaque obcaecati
      accusamus nesciunt? Veritatis natus enim minima quibusdam est dolorum
      iure, commodi tenetur accusantium delectus! Repellat perspiciatis magni
      saepe similique nemo? Ipsam quo nulla explicabo, corrupti aperiam
      recusandae illo tempora distinctio, totam vel, ducimus sint veniam omnis
      reiciendis natus dolore quibusdam doloremque eaque repellendus quasi a!
      Quas esse suscipit, perferendis porro id aspernatur repudiandae quibusdam,
      earum laboriosam animi rem voluptatibus dolor reiciendis, odio repellendus
      quaerat voluptatem corrupti. Temporibus blanditiis qui officiis. Sed, quae
      numquam aperiam sint praesentium exercitationem consequatur saepe
      voluptatum omnis enim distinctio expedita minus a rem asperiores at culpa
      accusantium tenetur dolores. Perferendis facilis cumque nihil! Magnam
      voluptas cupiditate a optio sunt laborum voluptate vitae ullam quis sequi,
      ipsa expedita odit quibusdam accusamus quas repellendus necessitatibus
      recusandae id eius in iure corrupti ducimus consequatur aperiam. Aut rerum
      omnis doloremque, aliquam, consequuntur ipsa obcaecati enim doloribus
      debitis vel quisquam. Nulla consequatur voluptates nam totam quaerat,
      beatae atque eligendi tenetur explicabo? Harum ab aliquam saepe aspernatur
      libero voluptate id quia! Dolores provident delectus eos quia eum modi.
      Illo, delectus a mollitia impedit officiis beatae ipsum tempora, optio sed
      error id cupiditate perspiciatis eos. Laudantium ducimus fugiat odio nulla
      aliquam eaque quos nostrum voluptas molestias aut, saepe, doloribus, illum
      magni ut laborum voluptatem. Nemo, eos quibusdam reiciendis tempora
      adipisci id officia, atque deserunt animi dicta odit dolorum dolore minus
      ullam sit ab neque distinctio doloribus nostrum ipsum illum maiores at
      quam? Excepturi consectetur iure perspiciatis numquam, voluptas tenetur
      distinctio ad illum placeat voluptate beatae ratione molestiae vel fugit.
      Dicta ullam porro nemo corporis aut saepe. Cum, fuga. Maxime ex error
      possimus magni ipsa corrupti voluptate, ipsum, dolor, autem eos
      laboriosam? Modi earum eius quidem laudantium odit, officia sint harum
      esse nobis, reprehenderit eos porro magnam. Beatae, nihil exercitationem
      doloribus fugiat possimus ea quis fugit impedit atque! Non, reprehenderit.
      Assumenda eveniet ipsam accusamus sapiente, sint temporibus quae alias
      amet deserunt molestias explicabo, dolorum quam obcaecati porro sunt
      laudantium eos reiciendis inventore, minima rerum maxime vel. Sint
      repellat magni vero, velit tempore rem magnam dolore atque doloribus. Illo
      natus tenetur libero, quia numquam non quidem deleniti aliquam veritatis
      repudiandae fugiat atque?
      <HeroBottom />
      {/* <Navbar /> */}
      {/* <Mainpage /> */}
      {/* <New /> */}
    </div>
  );
};
