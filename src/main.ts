document.getElementById("submit")!.addEventListener("click", ()=>{
  const url = (<HTMLInputElement>document.getElementById("url")).value;
  const webloc = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>URL</key>
	<string>${url}</string>
</dict>
</plist>
`
  const blob = new Blob([webloc], {type: "text/xml"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "generated.webloc";
  a.click();
});