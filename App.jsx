import React, {useState} from "react";

function App(){
  let [name, setName]= useState('Danis');
  let [surname,setSurname]= useState('Yapparov')
  let [text,setText]= useState('')
  let [age, setAge]= useState(18);
  let [ban, setBan]= useState(false);
  let [ageUser, setAgeUser]= useState(0);
  let [val, setval]= useState(0);
  let [val1, setval1]= useState(0);
  let [val2, setval2]= useState(0);
  let [val3, setval3]= useState(0);
  let [val4, setval4]= useState(0);
  let [num, setnum]= useState(0);
  let [langPython, setLangPython]= useState('python');
  let [langHtml, setLangHtml]= useState('html');
  let [langjs, setLangjs]= useState('js');
  let [num2, setnum2]= useState(0);
  let [res,setRes]=useState(0);
  let [checked,setChecked]=useState(false);
  let [ageChecked,setAgeChecked]=useState(false);
  let [wassup,setwassup]=useState(false);
  let texts = ['Los Angeles','New York','Moscow','Samara'];
  let texts3 = ['from 0 to 12 years', 'from 13 to 17 years', 'from 18 to 25 years','older than 25 years'];

  const options3 = texts3.map((text, index)=> {
      return <option key={index}>{text}</option>;
  });
  let [value,setvalue]= useState('');
  const options = texts.map((text, index)=> {
      return <option key={index}>{text}</option>;
  });
  let texts2 = ['babijon','dmer','samara'];
  let [value2,setvalue2]= useState('');
  const options2 = texts2.map((text, index)=> {
      return <option key={index}>{text}</option>;
  });
  let [radio,setRadio]=useState(1)
  function changeHandler(event) {
      setRadio(event.target.value)
  }
  let [radio2,setRadio2]=useState(1)
  function changeHandler(event) {
      setRadio2(event.target.value)
  }
  let langnr = (radio2==1) ? 'Your favorite language is Python':
      (radio2==2) ? 'Java script, nice choice':
      (radio2==3) ?'HTML, not bad':
      '';

  return <div>
      {name} {surname} {age}<br></br>
      <button onClick={()=> setName('Artyom')}>edit name</button>
      <button onClick={()=> setSurname('Nefyodov')}>edit surname</button>
      <button onClick={()=> setAge(age + 1)}>set age+</button>
      <button onClick={()=> setAge(age - 1)}>set age-</button><br></br>
      <p>{ban ? 'User Banned' : 'User not banned'}</p>
      {!ban ? <button onClick={()=> setBan(true)}>ban</button> : <button onClick={()=> setBan(false)}>unban</button>}<br></br>
      <input value={name} onChange={event=> setName(event.target.value)} /><br></br>
      <input value={text} onChange={event=> setText(event.target.value)} />
      <p>text: {text.length}</p><br></br>
      <input value={ageUser} onChange={event=> setAgeUser(event.target.value)} />
      <p>Birth Date: {2023-ageUser}</p><br></br>
      <input value={val} onChange={event => setval(+event.target.value)} />
      <input value={val1} onChange={event => setval1(+event.target.value)} />
      <input value={val2} onChange={event => setval2(+event.target.value)} />
      <input value={val3} onChange={event => setval3(+event.target.value)} />
      <input value={val4} onChange={event => setval4(+event.target.value)} />
      <p>Arithmetic mean: {(val+val1+val2+val3+val4)/5}</p><br></br>
      <input value={num} onChange={event => setnum(+event.target.value)} />
      <input value={num2} onChange={event => setnum2(+event.target.value)} />
      <button onClick={()=> setRes(num+num2)}>+</button>
      <button onClick={()=> setRes(num*num2)}>*</button><br></br>
      Result:{res}<br></br>
      <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)} />
      <p>User {checked ? 'hello':'bye'}</p><br></br>
      What programming language do you know?<br></br>Python<input type="checkbox" checked={langPython} onChange={()=>setLangPython(!langPython)} />
      HTML<input type="checkbox" checked={langHtml} onChange={()=>setLangHtml(!langHtml)} />
      js<input type="checkbox" checked={langjs} onChange={()=>setLangjs(!langjs)} /><br></br>
      you know: {langPython ? 'Python':''} {langHtml ? 'Html':''} {langjs ? 'js':''}<br></br>
      you are older than 18<input type="checkbox" checked={ageChecked} onChange={()=>setAgeChecked(!ageChecked)} />
      <p>{ageChecked && 'Hello'}</p><br></br>
      <input type="checkbox" checked={wassup} onChange={()=>setwassup(!wassup)} />
      <p>{wassup ? 'wassup': ''}</p>
      <select value={value} onChange={(event)=>setvalue(event.target.value)}>
          {options}
      </select>
      choose an user:<select value={value2} onChange={(event)=>setvalue2(event.target.value)}>
          {options2}
      </select><br></br>
      <select value={value} onChange={(event)=>setvalue(event.target.value)}>
          {options}
      </select><br></br>
      what age group do you belong to<select value={value} onChange={(event)=>setvalue(event.target.value)}>
          {options3}
      </select><br></br>
      <input type={'radio'} name='radio' value= '1' checked={radio == 1 ? true : false} onChange={changeHandler}
      />
      <input type={'radio'} name='radio' value= '2' checked={radio == 2 ? true : false} onChange={changeHandler}
      />
      <input type={'radio'} name='radio' value= '3' checked={radio == 3 ? true : false} onChange={changeHandler}
      />
      <p>value: {radio}</p><br></br>
      What's your favorite programming language?<br></br>
      Python<input type={'radio'} name='radio2' value= '1' checked={radio2 == 1 ? true : false} onChange={changeHandler}
      />
      JS<input type={'radio'} name='radio2' value= '2' checked={radio2 == 2 ? true : false} onChange={changeHandler}
      />
      Html<input type={'radio'} name='radio2' value= '3' checked={radio2 == 3 ? true : false} onChange={changeHandler}
      />
     <p>{langnr}</p>
      
      </div>
}
export default App;
