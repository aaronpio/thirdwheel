#!/usr/local/bin/fish

for uid in (seq 214)
  set gid (http ":3000/api/users/random/$uid" | jq '.gender_id')
  echo "($uid, $gid),"
end
