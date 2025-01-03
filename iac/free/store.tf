# Cloudflare provider configuration
provider "cloudflare" {
  api_token = var.store_cloudflare_api_key
}

# Define R2 bucket
resource "cloudflare_r2_bucket" "buyme" {
  account_id = var.store_cloudflare_account_id # Cloudflare Account ID
  location   = "ENAM"
  name       = "strapi-media"                  # Bucket name for storing media files
}

# Define R2 access keys for the bucket
# resource "cloudflare_access_key" "r2_access_key" {
#   account_id = var.store_cloudflare_account_id
#   name       = "r2-strapi-access-key" # Name of the access key
# }

# Outputs for access keys
# output "store_r2_access_key_id" {
#   value       = cloudflare_access_key.r2_access_key.access_key
#   description = "Access key ID for the R2 bucket"
#   sensitive   = true
# }

# output "store_r2_secret_access_key" {
#   value       = cloudflare_access_key.r2_access_key.secret_access_key
#   description = "Secret access key for the R2 bucket"
#   sensitive   = true
# }

# Outputs for integration
output "store_r2_bucket_name" {
  value       = cloudflare_r2_bucket.buyme.name
  description = "Name of the R2 bucket for media storage"
}

output "store_r2_bucket_id" {
  value       = cloudflare_r2_bucket.buyme.id
  description = "ID of the R2 bucket for media storage"
}

# Variables definition
variable "store_cloudflare_api_key" {
  description = "Cloudflare API token with permissions to manage R2 buckets"
  type        = string
}

variable "store_cloudflare_account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "store_cloudflare_access_key_id" {
  description = "Cloudflare access key id"
  type        = string
}

variable "store_cloudflare_secret_access_key" {
  description = "Cloudflare secret access key"
  type        = string
}
variable "store_cloudflare_r2_endpoint" {
  description = "Cloudflare r2 endpoint"
  type        = string
}