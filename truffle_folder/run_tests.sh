#!/bin/bash
#This is comment
echo -e "truffle test\ntruffle exec ./stop_truffle.js" | truffle develop > 1.txt
count_errors="$(cat 1.txt | grep -c 'Error')"
echo "count_errors = $count_errors"
if [ $count_errors -eq 0 ]
then
  echo Test finished succesfull.
  exit 0
else
  echo Test Faild.
  exit 1
fi

