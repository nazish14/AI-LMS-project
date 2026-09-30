const request=async(path,options={})=>{const token=localStorage.getItem('ai_lms_token');const res=await fetch(`/api${path}`,{...options,headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{}) ,...(options.headers||{})}});const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.message||'Request failed');return data};
export const register=(body)=>request('/auth/register',{method:'POST',body:JSON.stringify(body)});
export const login=(body)=>request('/auth/login',{method:'POST',body:JSON.stringify(body)});
export const profile=()=>request('/auth/profile');
export const updateProfile=(body)=>request('/auth/profile',{method:'PUT',body:JSON.stringify(body)});
export const askAI=(question)=>request('/ai/ask',{method:'POST',body:JSON.stringify({question})});
