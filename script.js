const form=document.querySelector("form"),fileInput=document.querySelector(".file-input"),progressArea=document.querySelector(".progress-area"),uploadedArea=document.querySelector(".uploaded-area");function uploadFile(e,s){let a=new XMLHttpRequest;a.open("POST","php/upload.php"),a.upload.addEventListener("progress",({loaded:a,total:l})=>{let i=Math.floor(a/l*100),r=Math.floor(l/1e3),o=r<1024?r+" KB":(a/1048576).toFixed(2)+" MB",n=`<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${e} • Uploading</span>
                              <span class="percent">${i}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${i}%"></div>
                            </div>
                          </div>
                        </li>`;if(uploadedArea.classList.add("onprogress"),progressArea.innerHTML=n,a===l){progressArea.innerHTML="";let t=`<li class="row">
                            <div class="content upload">
                              <div class="thumbnail-container">
                                <img src="${s}" alt="${e}" class="thumbnail">
                                <div class="remove-file" onclick="removeFile(this)"><i class="fas fa-times-circle"></i></div>
                              </div>
                              <div class="details">
                                <span class="name">${e} • Uploaded</span>
                                <span class="size">${o}</span>
                              </div>
                            </div>
                          </li>`;uploadedArea.classList.remove("onprogress"),uploadedArea.insertAdjacentHTML("afterbegin",t)}});let l=new FormData(form);a.send(l)}function removeFile(e){e.closest(".row").remove()}form.addEventListener("click",()=>{fileInput.click()}),fileInput.onchange=({target:e})=>{let s=e.files[0];if(s){let a=new FileReader;a.readAsDataURL(s),a.onload=function(e){let a=e.target.result;uploadFile(s.name,a)}}};
