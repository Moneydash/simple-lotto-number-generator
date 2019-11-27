<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SPGC Sterling Lotto</title>

    <link rel="stylesheet" href="bootstraps/css/bootstrap.css">
    <link rel="stylesheet" href="rand_gen.css">

    <script src="jquery-3.3.1.js"></script>
    <script src="bootstraps/js/bootstrap.bundle.js"></script>
    <script src="request.js"></script>
    <script src="rand_gen.js"></script>

</head>
<body>
    
    <div class="container">
        <div class="row justify-content-center my-3">
            <p class="text-center h2">SPGC LOTTO</p>
        </div>
        <div class="row justify-content-center mt-3" id="first_row">
            <div class="colss mr-1 round">
                <p id="trno3" name="trno3" class="text-center text-danger h3 trno"></p>
            </div>
            <div class="colss mr-1 round">
                <p id="trno2" name="trno2" class="text-center text-danger h3 trno"></p>
            </div>
            <div class="colss mr-1 round">
                <p id="trno1" name="trno1" class="text-center text-danger h3 trno"></p>
            </div>
            <div class="colss mr-1 round">
                <p id="trno0" name="trno0" class="text-center text-danger h3 trno"></p>
            </div>
        </div>
        <div class="row justify-content-center mt-3 mb-4" id="second_row">
            <div class="colss mr-4 round">
                <p id="output2" name="output2" class="rand_num text-center text-white display-3"></p>
            </div>
            <div class="colss mr-4 round">
                <p id="output1" name="output1" class="rand_num text-center text-white display-3"></p>
            </div>
            <div class="colss round">
                <p id="output0" name="output0" class="rand_num text-center text-white display-3"></p>
            </div>
        </div>
        <div class="row justify-content-center mb-3">
            <div class="col-4 mr-1">
                <button class="btn btn-block btn-primary btn-lg" id="rand_gen">Generate</button>
            </div>
            <div class="col-4 mr-1" id="reset_div">
                <input type="reset" id="reset" class="btn btn-block btn-primary btn-lg">
            </div>
        </div>
    </div>

</body>
</html>

<script>

        // setTimeout(function () {
            
        // })

</script>