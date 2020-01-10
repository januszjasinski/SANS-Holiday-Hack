require 'openssl'

KEYLENGTH=8

def generate_key(seed)
  key=""
  1.upto(KEYLENGTH) do
    seed = (214013 * seed + 2531011)
    key += (((seed >> 16) & 0x7fff_ffff) & 0x0FF).chr
  end
  return key
end

def decrypt(data, key)
  c=OpenSSL::Cipher::DES.new('cbc')
  c.decrypt
  c.key=key
  return(c.update(data) + c.final())
end

file = File.open("cheat.enc")
contents = file.read
file.close
seed=1575658800

puts "[+] Processing..."
for i in 1..7200 do
  key=generate_key(seed)
  begin
    mydata=decrypt(contents,key)
    
    name= seed.to_s  + ".pdf"
    File.write(name, mydata)
    result = IO.binread(name, 4).unpack("H*").first
    valid_pdf = result == '25504446'
    if valid_pdf
        puts "[+] Found the fella: " + seed.to_s  + ".pdf"
        break
    else
        File.delete(name)
    end
  rescue
    #puts "[+] Ach, bugger!"
  end
  seed=seed+1
end
