# terraform.tfvars SOBREESCRIBE el DEFAULT de variables.tf
aws_region = "us-east-2"
vpc_id          = "vpc-0ec8ae419af17fdad"
instance_type   = "t3.medium"
ami_id          = "ami-0862be96e41dcbf74"
instance_name   = "MyEC2Instance_2"
security_group_name = "MyEC2Instance_2"
user_data_script = ["docker.sh"]
ssh_key         = "my-ssh-key_1"