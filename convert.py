output_file = open('bpi.js', 'w')
input_file = open('coindesk-bpi-USD-close.csv','r')
input_file.readline()

output_file.write('var values = [\n')

while True:
    data = input_file.readline()
    data_parts = data.replace('\n','').split(',')
    if data_parts == ['']:
        break
    new_line = "  [new Date(" + data_parts[0].replace('-',',') + ").getTime(), " + data_parts[1] + "],\n"
    output_file.write(new_line)

output_file.write(']')

input_file.close()
output_file.close()
