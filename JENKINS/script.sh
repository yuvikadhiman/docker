
#!/bin/bash
name=$1
lastname=$2
show=$3
if [ "$show" = "true" ]; then
 echo "hello, $name $lastname "
else 
 echo "error to show "
fi

