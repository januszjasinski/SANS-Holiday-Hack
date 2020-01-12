```bash
WARNGING: ctrl + c restricted in this terminal - Do not use endless loops
Type exit to exit PowerShell.

PowerShell 6.2.3
Copyright (c) Microsoft Corporation. All rights reserved.

https://aka.ms/pscore6-docs
Type 'help' to get help.

🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲
🗲                                                                                🗲
🗲 Elf University Student Research Terminal - Christmas Cheer Laser Project       🗲
🗲 ------------------------------------------------------------------------------ 🗲
🗲 The research department at Elf University is currently working on a top-secret 🗲
🗲 Laser which shoots laser beams of Christmas cheer at a range of hundreds of    🗲
🗲 miles. The student research team was successfully able to tweak the laser to   🗲
🗲 JUST the right settings to achieve 5 Mega-Jollies per liter of laser output.   🗲
🗲 Unfortunately, someone broke into the research terminal, changed the laser     🗲
🗲 settings through the Web API and left a note behind at /home/callingcard.txt.  🗲
🗲 Read the calling card and follow the clues to find the correct laser Settings. 🗲
🗲 Apply these correct settings to the laser using it's Web API to achieve laser  🗲
🗲 output of 5 Mega-Jollies per liter.                                            🗲
🗲                                                                                🗲
🗲 Use (Invoke-WebRequest -Uri http://localhost:1225/).RawContent for more info.  🗲
🗲                                                                                🗲
🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲🗲 

PS /home/elf> Get-Content /home/callingcard.txt
What's become of your dear laser?
Fa la la la la, la la la la
Fa la la la la, la la la la
Could commands hold riddles in hist'ry?
Fa la la la la, la la la la
Nay! You'll ever suffer myst'ry!
Fa la la la la, la la la la
PS /home/elf> (Invoke-WebRequest -Uri http://localhost:1225/).RawContent
HTTP/1.0 200 OK                                                                                                                                                                                      
Server: Werkzeug/0.16.0                                                                                                                                                                              
Server: Python/3.6.9                                                                                                                                                                                 
Date: Sun, 12 Jan 2020 19:51:58 GMT                                                                                                                                                                  
Content-Type: text/html; charset=utf-8
Content-Length: 860

<html>
<body>
----------------------------------------------------
Christmas Cheer Laser Project Web API
----------------------------------------------------
Turn the laser on/off:
GET http://localhost:1225/api/on
GET http://localhost:1225/api/off

Check the current Mega-Jollies of laser output
GET http://localhost:1225/api/output

Change the lense refraction value (1.0 - 2.0):
GET http://localhost:1225/api/refraction?val=1.0

Change laser temperature in degrees Celsius:
GET http://localhost:1225/api/temperature?val=-10

Change the mirror angle value (0 - 359):
GET http://localhost:1225/api/angle?val=45.1

Change gaseous elements mixture:
POST http://localhost:1225/api/gas
POST BODY EXAMPLE (gas mixture percentages):
O=5&H=5&He=5&N=5&Ne=20&Ar=10&Xe=10&F=20&Kr=10&Rn=10
----------------------------------------------------
</pre>
</body>
PS /home/elf> Get-History

  Id CommandLine
  -- -----------
   1 Get-Help -Name Get-Process 
   2 Get-Help -Name Get-* 
   3 Set-ExecutionPolicy Unrestricted 
   4 Get-Service | ConvertTo-HTML -Property Name, Status > C:\services.htm 
   5 Get-Service | Export-CSV c:\service.csv 
   6 Get-Service | Select-Object Name, Status | Export-CSV c:\service.csv 
   7 (Invoke-WebRequest http://127.0.0.1:1225/api/angle?val=65.5).RawContent
   9 I have many name=value variables that I share to applications system wide. At a command I will reveal my secrets once you Get my Child Items.
  10 Get-Content /home/callingcard.txt
  11 (Invoke-WebRequest -Uri http://localhost:1225/).RawContent

PS /home/elf> gci env:* | Sort-Object name

Name                           Value
----                           -----
_                              /bin/su
DOTNET_SYSTEM_GLOBALIZATION_I… false
HOME                           /home/elf
HOSTNAME                       d1160c4b2dd6
LANG                           en_US.UTF-8
LC_ALL                         en_US.UTF-8
LOGNAME                        elf
PATH                           /opt/microsoft/powershell/6:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
PSModuleAnalysisCachePath      /var/cache/microsoft/powershell/PSModuleAnalysisCache/ModuleAnalysisCache
PSModulePath                   /home/elf/.local/share/powershell/Modules:/usr/local/share/powershell/Modules:/opt/microsoft/powershell/6/Modules
PWD                            /home/elf
RESOURCE_ID                    b163c6d9-74c7-425d-a30d-5c0f34ec4cd9
riddle                         Squeezed and compressed I am hidden away. Expand me from my prison and I will show you the way. Recurse through all /etc and Sort on my LastWriteTime to reveal im t…
SHELL                          /home/elf/elf
SHLVL                          1
TERM                           xterm
USERDOMAIN                     laserterminal
username                       elf
USERNAME                       elf

PS /home/elf> gci env:riddle | Sort-Object name | Format-List -Property *

PSPath        : Microsoft.PowerShell.Core\Environment::riddle
PSDrive       : Env
PSProvider    : Microsoft.PowerShell.Core\Environment
Name          : riddle
Key           : riddle
Value         : Squeezed and compressed I am hidden away. Expand me from my prison and I will show you the way. Recurse through all /etc and Sort on my LastWriteTime to reveal im the newest of 
                all.
PS /home/elf> Get-Childitem -Recurse '\etc' | Sort {$_.LastwriteTime} | SELECT -last 1
+ Get-Childitem -Recurse '\etc' | Sort {$_.LastwriteTime} | SELECT -las ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
+ CategoryInfo          : PermissionDenied: (/etc/ssl/private:String) [Get-ChildItem], UnauthorizedAccessException
+ FullyQualifiedErrorId : DirUnauthorizedAccessError,Microsoft.PowerShell.Commands.GetChildItemCommand
 


    Directory: /etc/apt
----                -------------         ------ ----
--r---           1/12/20  7:51 PM        5662902 archive

PS /home/elf> Copy-Item "\etc\apt\archive" -Destination "\home\elf"; Expand-Archive archive -DestinationPath .\riddle; cd ./riddle/;
PS /home/elf/riddle> dir                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                              Directory: /home/elf/riddle                                                                                                                                                                      
                                                                                                                                                                                                     
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----           1/12/20  7:56 PM                refraction

PS /home/elf/riddle> cd ./refraction/
PS /home/elf/riddle/refraction> dir


    Directory: /home/elf/riddle/refraction

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
------           11/7/19 11:57 AM            134 riddle
------           11/5/19  2:26 PM        5724384 runme.elf

PS /home/elf/riddle/refraction> Get-Content ./riddle
Very shallow am I in the depths of your elf home. You can find my entity by using my md5 identity:

25520151A320B5B0D21561F92C8F6224

PS /home/elf/riddle/refraction> chmod +x ./runme.elf
PS /home/elf/riddle/refraction> ./runme.elf
refraction?val=1.867
PS /home/elf/riddle/refraction> cd ../
PS /home/elf/riddle> cd ../
PS /home/elf> dir


    Directory: /home/elf

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-r---          12/13/19  5:15 PM                depths
d-----           1/12/20  7:56 PM                riddle
------           1/12/20  7:51 PM        5662902 archive
--r---          12/13/19  4:29 PM           2029 motd

PS /home/elf> Get-ChildItem -Path /"home/elf/depths/" -Recurse | Where { !$_.PSisContainer } | Where {(Get-FileHash -Path $_.FullName -Algorithm MD5).hash -eq "25520151A320B5B0D21561F92C8F6224"}


    Directory: /home/elf/depths/produce

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
--r---          11/18/19  7:53 PM            224 thhy5hll.txt

PS /home/elf> Get-Content /home/elf/depths/produce/thhy5hll.txt
temperature?val=-33.5

I am one of many thousand similar txt's contained within the deepest of /home/elf/depths. Finding me will give you the most strength but doing so will require Piping all the FullName's to Sort Length.
PS /home/elf> Get-ChildItem -Path /"home/elf/depths/" -Recurse | Sort-Object {$_.Fullname.Length} | Select -last 1 | Format-Table -Wrap -Autosize


    Directory: /home/elf/depths/larger/cloud/behavior/beauty/enemy/produce/age/chair/unknown/escape/vote/long/writer/behind/ahead/thin/occasionally/explore/tape/wherever/practical/therefore/cool/p
    late/ice/play/truth/potatoes/beauty/fourth/careful/dawn/adult/either/burn/end/accurate/rubbed/cake/main/she/threw/eager/trip/to/soon/think/fall/is/greatest/become/accident/labor/sail/dropped/f
    ox

Mode         LastWriteTime Length Name
----         ------------- ------ ----
--r---   11/18/19  7:53 PM    209 0jhj5xz6.txt

PS /home/elf> Get-Content "/home/elf/depths/larger/cloud/behavior/beauty/enemy/produce/age/chair/unknown/escape/vote/long/writer/behind/ahead/thin/occasionally/explore/tape/wherever/practical/therefore/cool/plate/ice/play/truth/potatoes/beauty/fourth/careful/dawn/adult/either/burn/end/accurate/rubbed/cake/main/she/threw/eager/trip/to/soon/think/fall/is/greatest/become/accident/labor/sail/dropped/fox/0jhj5xz6.txt"
Get process information to include Username identification. Stop Process to show me you're skilled and in this order they must be killed:

bushy
alabaster
minty
holly

Do this for me and then you /shall/see .

PS /home/elf> Get-Process -IncludeUsername 

     WS(M)   CPU(s)      Id UserName                       ProcessName
     -----   ------      -- --------                       -----------
     29.54     1.85       6 root                           CheerLaserServi
    184.30    18.21      31 elf                            elf
      3.56     0.03       1 root                           init
      0.78     0.00      23 bushy                          sleep
      0.72     0.00      27 minty                          sleep
      0.76     0.00      28 alabaster                      sleep
      0.71     0.00      29 holly                          sleep
      3.50     0.00      30 root                           su

PS /home/elf> Stop-Process -Id 23;Stop-Process -Id 28;Stop-Process -Id 27;Stop-Process -Id 29;
PS /home/elf> Get-Content /shall/see
Get the .xml children of /etc - an event log to be found. Group all .Id's and the last thing will be in the Properties of the lonely unique event Id.
PS /home/elf> Get-ChildItem -Path \etc -Include *.xml -Recurse -ErrorAction Silentlycontinue


    Directory: /etc/systemd/system/timers.target.wants

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
--r---          11/18/19  7:53 PM       10006962 EventLog.xml

PS /home/elf> Get-Content "/etc/systemd/system/timers.target.wants/EventLog.xml" -Head 20   
<Objs Version="1.1.0.1" xmlns="http://schemas.microsoft.com/powershell/2004/04">
  <Obj RefId="0">
    <TN RefId="0">
      <T>System.Diagnostics.Eventing.Reader.EventLogRecord</T>
      <T>System.Diagnostics.Eventing.Reader.EventRecord</T>
      <T>System.Object</T>
    </TN>
    <ToString>System.Diagnostics.Eventing.Reader.EventLogRecord</ToString>
    <Props>
      <I32 N="Id">3</I32>
      <By N="Version">5</By>
      <Nil N="Qualifiers" />
      <By N="Level">4</By>
      <I32 N="Task">3</I32>
      <I16 N="Opcode">0</I16>
      <I64 N="Keywords">-9223372036854775808</I64>
      <I64 N="RecordId">2194</I64>
      <S N="ProviderName">Microsoft-Windows-Sysmon</S>
      <G N="ProviderId">5770385f-c22a-43e0-bf4c-06f5698ffbd9</G>
      <S N="LogName">Microsoft-Windows-Sysmon/Operational</S>
PS /home/elf> [xml]$xml = Get-Content "/etc/systemd/system/timers.target.wants/EventLog.xml"
PS /home/elf> $xml.Objs.Obj.Props.I32 | Where-Object {$_.N -eq "ID" } |  Group-Object -Property '#text' | Where {$_.Group.Count -eq 1} | Select -expand Group

N  #text
-  -----
Id 1

PS /home/elf> ($xml.Objs.Obj.Props | Where {$_.I32.N -eq "Id" -and $_.I32.'#text' -eq 1}).Obj.LST.Obj.Props.S.'#text'
2019-11-07 17:59:56.525
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
10.0.14393.206 (rs1_release.160915-0644)
Windows PowerShell
Microsoft® Windows® Operating System
Microsoft Corporation
PowerShell.EXE
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -c "`$correct_gases_postbody = @{`n    O=6`n    H=7`n    He=3`n    N=4`n    Ne=22`n    Ar=11`n    Xe=10`n    F=20`n    Kr=8`n    Rn=9`n}`n"
C:\
ELFURESEARCH\allservices
High
MD5=097CE5761C89434367598B34FE32893B
C:\Windows\System32\svchost.exe
C:\Windows\system32\svchost.exe -k netsvcs
PS /home/elf> (Invoke-WebRequest http://127.0.0.1:1225/api/off | Out-Null);
PS /home/elf> (Invoke-WebRequest http://127.0.0.1:1225/api/on | Out-Null);                                                                                                                           
PS /home/elf> (Invoke-WebRequest http://127.0.0.1:1225/api/angle?val=65.5) | Out-Null;                                                                                                               
PS /home/elf> (Invoke-WebRequest http://127.0.0.1:1225/api/temperature?val=-33.5 | Out-Null);                                                                                                        
PS /home/elf> (Invoke-WebRequest http://127.0.0.1:1225/api/gas -Method POST -Body "O=6&H=7&He=3&N=4&Ne=22&Ar=11&Xe=10&F=20&Kr=8&Rn=9" | Out-Null);                                                   
PS /home/elf> (Invoke-WebRequest http://127.0.0.1:1225/api/refraction?val=1.867 | Out-Null);                                                                                                         
PS /home/elf> (Invoke-WebRequest http://127.0.0.1:1225/api/output).RawContent                                                                                                                        
HTTP/1.0 200 OK                                                                                                                                                                                      
Server: Werkzeug/0.16.0                                                                                                                                                                              
Server: Python/3.6.9                                                                                                                                                                                 
Date: Sun, 12 Jan 2020 20:21:15 GMT                                                                                                                                                                  
Content-Type: text/html; charset=utf-8
Content-Length: 200

Success! - 6.55 Mega-Jollies of Laser Output Reached!



PS /home/elf>
```
